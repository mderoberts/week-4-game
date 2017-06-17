$(document).ready(function(){
    var scoreboard = { 
        wins: 0,
        losses: 0
    };


    function randomNum(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }

    function resetGame() {

    $("#gem-1").data("randomNum", randomNum(1,12));
    $("#gem-2").data("randomNum", randomNum(1,12));
    $("#gem-3").data("randomNum", randomNum(1,12));
    $("#gem-4").data("randomNum", randomNum(1,12));
    console.log($("#gem-1").data("randomNum"));
    console.log($("#gem-2").data("randomNum"));
    console.log($("#gem-3").data("randomNum"));
    console.log($("#gem-4").data("randomNum"));

    matchNum = randomNum(19, 120);
    $("#matchNum").html(matchNum);

    score = 0;
    $("#score").html(score);


}

    $("#gem-1").data("randomNum", randomNum(1,12));
    $("#gem-2").data("randomNum", randomNum(1,12));
    $("#gem-3").data("randomNum", randomNum(1,12));
    $("#gem-4").data("randomNum", randomNum(1,12));
    console.log($("#gem-1").data("randomNum"));
    console.log($("#gem-2").data("randomNum"));
    console.log($("#gem-3").data("randomNum"));
    console.log($("#gem-4").data("randomNum"));

    var matchNum = randomNum(19, 120);
    $("#matchNum").html(matchNum);


    var score = 0;
    $(".gem").click(function(){
        var gemValue = parseInt($(this).data("randomNum"));
        score = score + gemValue;
            $("#score").html(score);
            console.log("score: " + score);
        if (score === matchNum) {
            scoreboard.wins++;
            $("#wins").html("Wins: " + scoreboard.wins);
            alert("You win!");
            resetGame();
        }

        else if (score > matchNum) {
            scoreboard.losses++;
            $("#losses").html("Losses: " + scoreboard.losses);
            alert("You lose!");
            resetGame();
        }

    });


});