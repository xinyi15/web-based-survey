import {uncTeenSurvey} from "/js/surveylist.js";
import {surveyref} from "/js/UniqueSurvey.js";
export function GetSurvey(surveyName) {
 if (surveyref[surveyName] === "uncTeenSurvey") {
        return(uncTeenSurvey);
    } else if (surveyref[surveyName] === "uncTeen") {
    }
};