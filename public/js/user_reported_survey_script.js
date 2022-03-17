//const  ql_ref  = require('../../UniqueQeuestionList.json');
//const  uncTeenSurvey  = require('../../UniqueQeuestionList.json');
import * as ql_ref from '/js/UniqueQeuestionList.json' assert { type: "json" };

import {uncTeenSurvey} from "/js/surveylist.js";
//import ql_ref from '../../UniqueQeuestionList.json';
let surveyName = "uncTeenSurvey"; // Get surveyname from table Question in the database
let id=10;

//var idJSON = JSON.parse($('#idJSON').text());
//var surveynameJSON = JSON.parse($('#surveynameJSON').text());
//var surveyName=surveynameJSON;
//var id=idJSON;

var json = {
    "checkErrorsMode": "onValueChanged",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "matrixdynamic",
                    "name": "userreportedsurvey",
                    "title": "Please create custom question survey.",
                    "columns": [
                        {
                            "name":  "QuestionsType",
                            "title": "Questions",
                            "cellType": "dropdown",
                            "isRequired": true,
                            "choices": []
                        }
                    ],
                    "detailPanelMode": "underRow",
                    "rowCount": 1,
                    "addRowText": "Add a questions",
                    "removeRowText": "Remove the question"
                }
            ]
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
    json.pages[0].elements[0].columns[0].choices = qeustiondescriptions;
    console.log(json)
  return(qeustionnames)
}

if (surveyName === "uncTeenSurvey") {
    var questions = uncTeenSurvey;
    var qeustionnames_save=insertQuestions(questions);
} else if (surveyName === "uncTeen") {
}



Survey
    .StylesManager
    .applyTheme("modern");

window.survey = new Survey.Model(json);

function savequestionlist(datatmp) {
    let surveyQlist=json.pages[0].elements[0].columns[0].choices;
    //let surveyQlist = surveyQlist2.reduce(function(a, e, i) {
 //a.push(e.value)
 /// return a;
//}, []);
    let usersurveyQlist = datatmp.userreportedsurvey.reduce(function(a, e, i) {
        if (surveyQlist.includes(e.QuestionsType))
             a.push(qeustionnames_save[i]);
         return a;
    }, []);
     return( usersurveyQlist );
}

 
function generate_keys(questionlist){
let arr = Array(Math.ceil(questions.pages.length/8)*8).fill(0);
//let questionlist=["Q26","Q4"]
let questionlist2=questionlist.sort()
let num=questionlist2.reduce(function(a, e, i) {
    tmp=parseInt(e.split("Q")[1])-1
     arr[tmp]=1
}, []);   // [0, 3, 5]
let input = arr;
let chunked = []
let size = 8;
Array.from({length: Math.ceil(input.length / size)}, (val, i) => {
  chunked.push(input.slice(i * size, i * size + size))
})
str=""
//c={
//   "FRXHC099559": 16,
//   "SNVYC815187": 64,
//   "HMIOG946604": 2
// }
Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}
let res = chunked.map(x =>str+x);
let y=res.map(x =>ql_ref.getKeyByValue(parseInt(x.replaceAll(",",""),2)))
var filtered = y.filter(x => x !== undefined);
//console.log(filtered.join('_'));
return(filtered)
}

 survey
     .onComplete
    .add(function (sender) {
        let questionlist_=savequestionlist(sender.data);//sender
        ///var parameter = $(this).val();
        let keys=generate_keys(questionlist_);
        //survey.showCompletedPage = false;
        //window.location = "https://web-based-survey.herokuapp.com/test"// + parameter;

          document
              .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify( keys, null, 3);
        
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