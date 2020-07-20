var bank = document.getElementById("bank");
var bet = document.getElementById("bet");
var gamesPlayed = document.getElementById("gamesPlayed");
var gamesWon = document.getElementById("gamesWon");
var gamesLost = document.getElementById("gamesLost");
var thirdOne = document.getElementById("thirdOne");
var thirdTwo = document.getElementById("thirdTwo");
var thirdThree = document.getElementById("thirdThree");
var winningNumbers = document.getElementById("winningNumbers");
var counter = 0;

function reset1(){
    bank.value = "";
    bet.value = "";
    gamesPlayed.innerHTML = "0";
    gamesWon.innerHTML = "0";
    gamesLost.innerHTML = "0";
    thirdOne.innerHTML = "0";
    thirdTwo.innerHTML = "0";
    thirdThree.innerHTML = "0";
    winningNumbers.innerHTML = "";
    counter = 0;

}


function play(){
    
    if (bank.value >= bet.value * 2) {
        gamesPlayed.value = gamesPlayed.innerHTML ++;

        if(counter == 0){
            bank.value = bank.value - bet.value *2;
            thirdOne.innerHTML = bet.value;
            thirdThree.innerHTML = bet.value;
            
        }
        if(counter >= 1){
            bank.value = bank.value - bet.value * 2;
        }

        counter.value = counter ++;
        
        var winNumber = Math.floor(Math.random() * 37); 
        
        winningNumbers.append(winNumber + ",");
        
        if (winNumber >= 1 && winNumber <= 12) {
            if(Number(thirdOne.textContent) != 0){
                
                gamesWon.value = gamesWon.innerHTML ++;

                var winnings = thirdOne.textContent * 2;

                bank.value = Number(bank.value) + Number(winnings);
                bank.value = Number(bank.value) + Number(thirdOne.textContent);
                

                thirdOne.innerHTML = "0";
                thirdTwo.innerHTML = "0";
                thirdThree.innerHTML = "0";
                
                thirdTwo.innerHTML = bet.value;
                thirdThree.innerHTML = bet.value;
            }
            else{
                gamesLost.value = gamesLost.innerHTML ++;
                
            }

        }

        if (winNumber >= 13 && winNumber <= 24) {
            if(Number(thirdTwo.textContent) != 0){
                
                gamesWon.value = gamesWon.innerHTML ++;

                var winnings = thirdTwo.textContent * 2;

                bank.value = Number(bank.value) + Number(winnings);
                bank.value = Number(bank.value) + Number(thirdTwo.textContent);
                

                thirdOne.innerHTML = "0";
                thirdTwo.innerHTML = "0";
                thirdThree.innerHTML = "0";

                

                thirdOne.innerHTML = bet.value;
                thirdThree.innerHTML = bet.value;
            }
            else{
                gamesLost.value = gamesLost.innerHTML ++;
                

               
            }

        }
        if (winNumber >= 25 && winNumber <= 36) {
            if(Number(thirdThree.textContent) != 0){
                
                gamesWon.value = gamesWon.innerHTML ++;

                var winnings = thirdThree.textContent * 2;
                
                bank.value = Number(bank.value) + Number(winnings);
                bank.value = Number(bank.value) + Number(thirdThree.textContent);
                

                thirdOne.innerHTML = "0";
                thirdTwo.innerHTML = "0";
                thirdThree.innerHTML = "0";
                
              

                thirdTwo.innerHTML = bet.value;
                thirdOne.innerHTML = bet.value;
            }
            else{
                gamesLost.value = gamesLost.innerHTML ++;
                

                

            }

        }
        if (winNumber == 0 || winNumber == 37) {
            gamesLost.value = gamesLost.innerHTML ++;
            thirdOne.innerHTML = "0";
            thirdTwo.innerHTML = "0";
            thirdThree.innerHTML = "0";
            bank.value = bank.value - bet.value *2;
            thirdOne.innerHTML = bet.value;
            thirdThree.innerHTML = bet.value;
            
        }
    }
    else{
       alert("You are out of money. Press reset or add more funds."); 
    }

}