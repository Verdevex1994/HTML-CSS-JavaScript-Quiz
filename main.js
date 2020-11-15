function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;


    if(question1 == "500kg"){
        correct++;
    }
    if(question2 == "Eddie Hall") {
        correct++;
    }
    if(question3 == "4") {
        correct++;
    }
    if(question4 == "2018") {
        correct++;
    }


    var messages = ["Superb Job!", "Almost there!", "Halfway!", "Mehh!", "You need to work on your Strongman knowledge!"];
    var pictures = ["images/dogs.gif", "images/SOclose1.gif", "images/halfway.gif", "images/comeon.gif", "images/giphy.gif"];


    var score;
//if you got no answers correct
    if(correct < 1){
        score = 4;
    }
    //if you got 3 out of 4 right
    if(correct >= 3 && correct < 4) {
        score = 1;
    }
    //if you got them all right!
    if(correct > 3) {
        score = 0;
    }
    //if you got 2 out of 4 right
    if(correct >=2 && correct < 3) {
        score = 2;
    }
    //if you got 1 out of 4 right
    if(correct > 0 && correct < 2) {
        score = 3;
    }









    document.getElementById('messages').innerHTML = messages[score];
    document.getElementById('number.correct').innerHTML = "You got " + correct + " correct " + " out of " + 4;
    document.getElementById('pictures').src = pictures[score];
}



