import {uncTeenSurvey} from "/js/surveylist.js";
import {surveyref} from "/js/UniqueSurvey.js";
export function GetSurvey(surveyName) {
   // console.log(surveyref[surveyName]== "uncTeenSurvey");
 if (surveyref[surveyName] == "uncTeenSurvey") {
    //console.log(surveyref[surveyName]);
        return(uncTeenSurvey);
    } else if (surveyref[surveyName] === "uncTeen") {
    }
};