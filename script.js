$("button").click(function() {
    var lastname = $(".lastname").val();
    var food = $(".food").val();
    var number = parseInt($(".number").val());
    console.log(lastname);
    var score = lastname + " in 10 years you will have eaten " + number * 520 + " " + "times " + food + "! ";
    console.log(score);
    $(".answer").text(score);
});