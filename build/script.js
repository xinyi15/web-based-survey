import surveylist from "/surveylist.js";

window.survey = new Survey.Model(surveylist);

var myCss = {
    matrix: {root: "table table-striped matrixtable"},
};

$("#surveyContainer").Survey({
    model: survey,
    css: myCss
});

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });

 function sendDataToTheServer(isComplete, data) {
        var text = isComplete ? "The survey is completed" : "The survey is not completed";
        var a=Object.keys(data);
        // document.querySelector('#surveyResults').innerHTML = text + ", result: " + JSON.stringify(data);
        var url="https://web-based-survey.herokuapp.com/answer";
        var timeNow = new Date();
         fetch(url,{
            method:'post',
            body: JSON.stringify({
                id:2,
                time: timeNow, 
                 survey: "Morning", 
                 question: a[a.length-1], 
                 answer: data[a[a.length-1]], 
                 date: timeNow.getFullYear() + "-" + timeNow.getMonth() + "-" + timeNow.getDate()
            }),
            headers:{'Content-Type':'application/json'}
        });
        //const t=await response.json();
       // console.log(t);
    }
    
    survey.onComplete.add(function(survey) {
        sendDataToTheServer(true, survey.data);
    });
    
    survey.onPartialSend.add(function(survey) {
        sendDataToTheServer(false, survey.data);
    });

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#4B9CD3";
defaultThemeColors["$main-hover-color"] = "#4B9CD3";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#4B9CD3";

defaultThemeColors["$header-background-color"] = "#4a4a4a";
defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey
    .StylesManager
    .applyTheme();

$(".sv_prev_btn").remove(); // hide the previous button
