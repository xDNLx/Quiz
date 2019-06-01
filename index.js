const check = () => {
    var points = $("#points");
    var firstAnswer = $("#firstAnswer").val();
    var secondAnswer = $("#secondAnswer").val();
    var thirdAnswer = $("#thirdAnswer").val();
    var fourthAnswer = $("#fourthAnswer").val();
    var fifthAnswer = $("#fifthAnswer").val();
    var score = 0;

    if(firstAnswer === "Warsaw"){
        score++
    }

    if(secondAnswer === "London"){
        score++
    }

    if(thirdAnswer === "Moscow"){
        score++
    }

    if(fourthAnswer === "Burj Khalifa"){
        score++
    }

    if(fifthAnswer === 'China'){
        score++
    }
    
    points.html("Points: " + score + "/ 5");
}

$(() => {
    check();
    $("#check").click(check)
})