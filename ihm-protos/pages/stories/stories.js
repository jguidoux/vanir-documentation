$(function() {

    $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');

});

var active = 'graph-container'

function toggler(divId) {
    $("#" + divId).toggle();
    $("#" + active).toggle();
    active = divId;
}