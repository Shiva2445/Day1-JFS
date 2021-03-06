const readline = require("readline-sync");
const randomWords = require("random-words");
function run_game() {
    let randomWord = randomWords();
    let attempts = randomWord.length;
    console.log("Save your friend. Guess the correct word or he/she will die");
    console.log(`Good luck! You have ${attempts} to save your friend`);
    console.log();
    console.log();
let a={
     values :"[]",
     keys :"[]",
     guessed : "{}" //already guessed characters
}
    function init() {
        for(let i=0; i<randomWord.length; i++) {
            key.push(randomWord[i]);
            values.push("_");
        }
    }
    init();

    //print result function
    function getResStr() {
        let str = "";
        keys.forEach((key,index) => {
            str += values[index] +" ";
        });
        console.log(str+"\t\t"+"Remaining incorrect attempts: "+attempts);
    }
    getResStr(); //initial print

    //update value based on correct guess
    function updateVal(guess_char) {
        keys.forEach((key, index)=>{
            if(key == guess_char) {
                values[index] = guess_char;
            }
        });
    }

    //current status of game
    function game_status(values) {
        //implement this
        for(let i of values){
            if(i=="_"){
                return false;
            }
        }
        console.log("User gone")
                return true;
            };
            
        
    }

    //check if guessed word is correct or not
    function isCorrect(guess) {
        if(randomWord.indexOf(guess)<0) return false;
        return true;
    }

    //word game function
    function guess_char() {
        if(attempts == 0 || game_status(values)) {
            if(attempts == 0) {
                console.log("User lost");
                console.log();
                console.log();
                console.log("Correct word was: "+randomWord);
                console.log();
                console.log();
            }
            return;
        }
        let answer = readline.question("User: ");
        //implement after this
        updateVal(answer);
    }
}

let response = readline.question("Do you want to play a game? Y/N: ");
while(response != "N") {
    run_game();
    response = readline.question("Do you want to play again? Y/N: ");
}