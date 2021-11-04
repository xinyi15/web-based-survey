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
            .textContent = "Result JSON:\n dazhuxiaozhu" + JSON.stringify(sender.data, null, 3);
    });

    function sendDataToTheServer(isComplete, data) {
        var text = isComplete ? "The survey is completed" : "The survey is not completed";
        document.querySelector('#surveyResults').innerHTML = text + ", result: " + JSON.stringify(data);
    }
    
    survey.onComplete.add(function(survey, options) {
        sendDataToTheServer(true, survey.data);
    });
    
    survey.onPartialSend.add(function(survey, options) {
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

const { Pool } = require('pg')
const pool = new Pool({
  user: 'jovttytttjkoaw',
  host: 'ec2-52-23-45-36.compute-1.amazonaws.com',
  database: 'de369o7l6fqn9p',
  password: '77d7812505f2328350b04d9fb5bb45ade034c24a216d4ac59682c55fcce5941b',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

// sql insert table value
// INSERT INTO answer
//  ()
