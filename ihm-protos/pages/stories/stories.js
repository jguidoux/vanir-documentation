$(function () {

    $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');

});

var active = 'graph-container'

function toggler(divId) {
    $("#" + divId).toggle();
    $("#" + active).toggle();
    active = divId;
}

function writeResume(content) {
    var resumDiv = $("#resume-area");
    resumDiv.empty();
    resumDiv.append(content)

}

function isEmpty(str) {
    return (!str || 0 === str.length);
}