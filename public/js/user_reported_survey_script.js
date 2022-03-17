import qlref from '/js/UniqueQeuestionList.js';
import { GetSurvey } from '/js/helper.js';

let surveyName = "uncTeenSurvey"; // Get surveyname from table Question in the database
let id=10;

//var idJSON = JSON.parse($('#idJSON').text());
//var surveynameJSON = JSON.parse($('#surveynameJSON').text());
//var surveyName=surveynameJSON;
//var id=idJSON;

var json = {
    "elements": [
        {
            "type": "checkbox",
            "name": "userreportedsurvey",
            "title": "Please create custom question survey.",
            "isRequired": true,
            "hasNone": true,
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
   // console.log(json)
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
        if (surveyQlist.includes(e.checkbox))
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
let str=""
let res = chunked.map(x =>str+x);
Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}
let y=res.map(x =>qlref.getKeyByValue(parseInt(x.replaceAll(",",""),2)))
let filtered = y.filter(x => x !== undefined);
return(filtered.join('_'))
}

 survey
     .onComplete
    .add(function (sender) {
        let questionlist_=savequestionlist(sender.data);//sender
        ///var parameter = $(this).val();
        let keys=generate_keys(questionlist_);
        //survey.showCompletedPage = false;
        let url="https://web-based-survey.herokuapp.com/survey/"+id+"/"+ surveyName+"/"+getTime()+"/"+
        keys+"/PAHH262545/TLAS903782";
        //window.location = "https://web-based-survey.herokuapp.com/test"// + parameter;

          document
              .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify( questionlist_, null, 3);
        
     })

   
function onAngularComponentInit() {
    Survey
        .SurveyNG
        .render("surveyElement", {model: survey});
}
var HelloApp = ng
    .core
    .Component({selector: 'ng-app', template: '<div id="surveyContainer" class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div> '})
    .Class({
        constructor: function () {},
        ngOnInit: function () {
            onAngularComponentInit();
        }
    });
document.addEventListener('DOMContentLoaded', function () {
    ng
        .platformBrowserDynamic
        .bootstrap(HelloApp);
});