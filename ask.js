const responses = ["NO", "YES", "Uncertain", "Out look not good","Out look is good"];
var userQuestion = document.getElementById("userQuestion");
var computerAnswer = document.getElementById("computerAnswer");

function clearForm(){
    userQuestion.value = "";
    computerAnswer.innerHTML = "";
}

function askQuestion(){
    var arrayPosition = Math.floor(Math.random() * 4);
    computerAnswer.innerHTML = responses[arrayPosition];
}