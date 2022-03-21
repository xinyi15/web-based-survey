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
        if(![3,11,14,15,16,20,21,22,23].includes(i)){
        console.log(i)
        qeustiondescriptions.push(questions.pages[i].questions[0].title);
        qeustionnames.push(questions.pages[i].questions[0].name);
        }
    }
    json.elements[0].choices = qeustiondescriptions;
    console.log( json.elements[0])
  return(qeustionnames)
}

    var questions = GetSurvey(surveyName);
    var qeustionnames_save=insertQuestions(questions);

Survey
    .StylesManager
    .applyTheme("bootstrap");//("modern");//"defaultV2"
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

window.survey = new Survey.Model(json);

function savequestionlist(datatmp) {
    let surveyQlist=json.elements[0].choices;
    let usersurveyQlist = datatmp.userreportedsurvey.reduce(function(a, e, i) {
        if (surveyQlist.includes(e))
             a.push(qeustionnames_save[surveyQlist.indexOf(e)]);
         return a;
    }, []);
     return(usersurveyQlist);
}



function generate_keys(questionlist){

    if(questionlist.includes("Q3")){
        questionlist.push("Q4");
    }
if(questionlist.includes("Q11")){
    questionlist.push("Q12");
 //   questionlist =  [...new Set(questionlist)]  
}
if(questionlist.includes("Q14")){
    questionlist.push("Q15","Q16","Q17"); 
}
if(questionlist.includes("Q20")){
    questionlist.push("Q21","Q22","Q23","Q24");
}

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
console.log("rr",arr);
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

survey.showCompletedPage = false;
 survey
     .onComplete
    .add(function (sender) {
        let questionlist_=savequestionlist(sender.data);//sender
        console.log(sender.data);
        console.log(questionlist_);
        let keys=generate_keys(questionlist_);
        survey.showCompletedPage = false;
        // document
         let url="https://web-based-survey.herokuapp.com/self-report-surveys/"+id+"/"+ surveyName+"/"+ keys;
         window.location = url
        //    document
        //      .querySelector('#surveyResult')
        //      .textContent = "Result JSON:\n" + JSON.stringify( keys, null, 3); 
     })



    survey
    .onUpdateQuestionCssClasses
    .add(function (survey, options) {
        var classes = options.cssClasses
        console.log(classes)
        // classes.mainRoot += " sv_qstn";
        classes.root = " sq-root";
        classes.title += " sq-title"
        classes.item += " sq-item";
        classes.label += "sq-label";
        if (options.question.getType() === "checkbox") {
            classes.root += " sq-root-cb";
        }

    });


    // survey
    // .onUpdateQuestionCssClasses
    // .add(function (survey, options) {
    //     var classes = options.cssClasses
    //     classes.item += " sq-item";
    //     classes.label += " sq-label";
    // });

    // var myCss = {
    //      navigation: {
    //        complete: "sv_complete_btn",
    //      }
    // //    navigationButton: "button btn-lg"
    // }

    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

    survey.showCompletedPage = false;
    // survey.showNavigationButtons=false;
     $("#surveyElement").Survey({model: survey})// css:myCss});
    