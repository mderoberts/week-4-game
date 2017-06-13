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

    var score = 0;
    $(".gem").click(function(){
        score = Number(randomNum(1,12)) + Number($(this).val());
            $("#score").text(score);
    });

    // console.log($("#gem-1").attr("value"));

    $("#matchNum").text(randomNum(19, 120));


});