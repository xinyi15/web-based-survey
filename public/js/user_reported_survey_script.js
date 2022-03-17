import qlref from '/js/UniqueQeuestionList.js';
import {GetSurvey} from '/js/helper.js';

//let surveyName = "uncTeenSurvey"; // Get surveyname from table Question in the database
//let id=10;

var idJSON = JSON.parse($('#idJSON').text());
var surveynameJSON = JSON.parse($('#surveynameJSON').text());
var surveyName=surveynameJSON;
var id=idJSON;

var json = {
    "elements": [
        {
            "type": "checkbox",
            "name": "userreportedsurvey",
            "title": "Please create custom question survey.",
            "isRequired": true,
            "hasNone": false,
            "colCount": 1,
            "choices": []
        }
    ]
};

function insertQuestions(questions) {
    let qeustiondescriptions = [];
    let qeustionnames = [];
    for (let i = 0; i < questions.pages.length; i++) {
        qeustiondescriptions.push(questions.pages[i].questions[0].title);
        qeustionnames.push(questions.pages[i].questions[0].name);
    }
    json.elements[0].choices = qeustiondescriptions;
    console.log( json.elements[0])
  return(qeustionnames)
}

    var questions = GetSurvey(surveyName);
    var qeustionnames_save=insertQuestions(questions);

Survey
    .StylesManager
    .applyTheme("modern");//"defaultV2"

window.survey = new Survey.Model(json);

function savequestionlist(datatmp) {
    let surveyQlist=json.elements[0].choices;
    let usersurveyQlist = datatmp.userreportedsurvey.reduce(function(a, e, i) {
        if (surveyQlist.includes(e))
             a.push(qeustionnames_save[i]);
         return a;
    }, []);
     return(usersurveyQlist);
}



function generate_keys(questionlist){
let arr = Array(Math.ceil(questions.pages.length/8)*8).fill(0);
//let questionlist=["Q26","Q4"]
let questionlist2=questionlist.sort()
let num=questionlist2.reduce(function(a, e, i) {
  let  tmp=parseInt(e.split("Q")[1])-1
     arr[tmp]=1
}, []);   // [0, 3, 5]
let input = arr;
let chunked = []
let size = 8;
Array.from({length: Math.ceil(input.length / size)}, (val, i) => {
  chunked.push(input.slice(i * size, i * size + size))
})
console.log("ss",chunked);
let str=""
let res = chunked.map(x =>str+x);
console.log("ss",res);
Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}

console.log(res);
console.log(res.map(x =>(parseInt(x.replaceAll(",",""),2))));
let y=res.map(x =>qlref.getKeyByValue(parseInt(x.replaceAll(",",""),2)));

let filtered = y.filter(x => x !== undefined);
return(filtered.join('_'))
}

 survey
     .onComplete
    .add(function (sender) {
        let questionlist_=savequestionlist(sender.data);//sender
        console.log(sender.data);
        console.log(questionlist_);
        let keys=generate_keys(questionlist_);
        survey.showCompletedPage = false;
        let url="https://web-based-survey.herokuapp.com/self-report-surveys/"+id+"/"+ surveyName+"/"+ keys;
        //window.location = url

           document
              .querySelector('#surveyResult')
             .textContent = "Result JSON:\n" + JSON.stringify( keys, null, 3);
        
     })


    //  survey
    //  .onUpdateQuestionCssClasses
    //  .add(function (survey, options) {
    //      var classes = options.cssClasses
    //      //classes.item = "sq-item";
    //      classes.label = "sq-label";

    //  });


    survey
    .onUpdateChoiceItemCss 
    .add(function (survey, options) {
        var classes = options.css
       // classes.label = "sq-label";
       console.log(classes)

    });

     $("#surveyElement").Survey({model: survey});