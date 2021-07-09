import surveylist from "./surveylist.js";

export function load() {

    var survey = new Survey.Model(surveylist);
    $("#surveyContainer").Survey({model:survey});
}

$(function() {
    load();
});