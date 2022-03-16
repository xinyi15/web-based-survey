import {uncTeenSurvey} from "/js/surveylist.js";

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
    let questions = uncTeenSurvey;
    let qeustionnames=insertQuestions(questions);
} else if (surveyName === "uncTeen") {
}



function savequestionlist(survey,data) {
    let newPages = [];
    surveyQlist=survey.pages[0].elements[0].columns[0]
    for (let i = 0; i < surveyQlist.choices.length; i++) {
        if (data.name.includes(surveyQlist.choices)) {
            newPages.push(questions.pages[i]);
        }
    }
    questions.pages = newPages;
    window.survey = new Survey.Model(questions);
}




Survey
    .StylesManager
    .applyTheme("modern");

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
        
    });

// survey.data = {
//     'relatives': [
//         {
//             'relativeType': 'father'
//         }, {
//             'relativeType': 'mother'
//         }
//     ]
// };

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