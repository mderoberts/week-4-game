$(document).ready(function(){
    var scoreboard = { 
        wins: 0,
        losses: 0
    };

    function randomNum(x, y) {
         return Math.floor(Math.random() * (y - x + 1)) + x;
    }

    $("#gem-1").attr("value", randomNum(1,12));
    $("#gem-2").attr("value", randomNum(1,12));
    $("#gem-3").attr("value", randomNum(1,12));
    $("#gem-4").attr("value", randomNum(1,12));
    // console.log($("#gem-1").attr("value"));

    $("#matchNum").text(randomNum(19, 120));



});