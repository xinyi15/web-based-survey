Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "checkErrorsMode": "onValueChanged",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "matrixdynamic",
                    "name": "relatives",
                    "title": "Please enter all blood relatives you know",
                    "columns": [
                        {
                            "name": "relativeType",
                            "title": "Relative",
                            "cellType": "dropdown",
                            "isRequired": true,
                            "choices": [
                                "father",
                                "mother",
                                "brother",
                                "sister",
                                "son",
                                "daughter"
                            ]
                        }
                    ],
                    "detailPanelMode": "underRow",
                    "rowCount": 1,
                    "addRowText": "Add a blood relative",
                    "removeRowText": "Remove the relative"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });

survey.data = {
    'relatives': [
        {
            'relativeType': 'father'
        }, {
            'relativeType': 'mother'
        }
    ]
};

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