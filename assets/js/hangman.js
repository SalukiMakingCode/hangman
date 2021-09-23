(() => {
    // set variable
    let data="";
    let elem="";
    let wordToGuestFirstSetHtml="";
    let i=0;
    let youFind=0;
    let statutHangman=0;
    let numberLetterToGuest=0;
    let wordIdDraw= Math.floor(Math.random()*wordList.length);
    let arrayWordToGuest=wordList[wordIdDraw]["word"].split('');
    // create function to check letter after an user had choose a new one
    function checkLetterChosen(letter) {
        i=0; youFind=0;
        for (elem of arrayWordToGuest) {
            if (letter===arrayWordToGuest[i]) {
                youFind++;
                numberLetterToGuest--;
                document.getElementById("letter"+i).textContent=letter;
                document.getElementById(letter).className="letterPickGood";
            }
            document.querySelector("#"+letter).dataset.status=1;
            i++;
        }
        if (youFind===0) {
            document.getElementById(letter).className="letterPickBad";
            data=document.querySelector("#hangman");
            statutHangman=data.dataset.status;
            statutHangman++;
            document.getElementById("hangman").src="../assets/img/"+statutHangman+".png";
            document.querySelector("#hangman").dataset.status=statutHangman;
            if (statutHangman===7) {
             endGame("lose");
            }
        }
        if (numberLetterToGuest===0) {
            endGame("win");
        }
    }
    //function end of game
    function endGame (statut) {
        setTimeout(function(){
        if (statut==="lose") alert("You lose !");
        if (statut==="win") alert ("you win");
        }, 500);
    }
    // set first screen
    document.getElementById("category").innerHTML=wordList[wordIdDraw]["category"];
    for (elem of arrayWordToGuest) {
        if (elem===" ") wordToGuestFirstSetHtml=wordToGuestFirstSetHtml+" &nbsp; ";
        else if (elem==="-") wordToGuestFirstSetHtml=wordToGuestFirstSetHtml+" - ";
        else {
            wordToGuestFirstSetHtml = wordToGuestFirstSetHtml + "<span id='letter" + i + "'>_</span> ";
            numberLetterToGuest++;
        }
        i++;
    }
    document.getElementById("wordToGuest").innerHTML=wordToGuestFirstSetHtml;
    // listen for event
    document.getElementById("a").addEventListener("click", ()=> {
        data=document.querySelector("#a");
        if (data.dataset.status==="0") checkLetterChosen("a");
    })
    document.getElementById("b").addEventListener("click", ()=> {
        data=document.querySelector("#b");
        if (data.dataset.status==="0") checkLetterChosen("b");
    })
    document.getElementById("c").addEventListener("click", ()=> {
        data=document.querySelector("#c");
        if (data.dataset.status==="0") checkLetterChosen("c");
    })
    document.getElementById("d").addEventListener("click", ()=> {
        data=document.querySelector("#d");
        if (data.dataset.status==="0") checkLetterChosen("d");
    })
    document.getElementById("e").addEventListener("click", ()=> {
        data=document.querySelector("#e");
        if (data.dataset.status==="0") checkLetterChosen("e");
    })
    document.getElementById("f").addEventListener("click", ()=> {
        data=document.querySelector("#f");
        if (data.dataset.status==="0") checkLetterChosen("f");
    })
    document.getElementById("g").addEventListener("click", ()=> {
        data=document.querySelector("#g");
        if (data.dataset.status==="0") checkLetterChosen("g");
    })
    document.getElementById("h").addEventListener("click", ()=> {
        data=document.querySelector("#h");
        if (data.dataset.status==="0") checkLetterChosen("h");
    })
    document.getElementById("i").addEventListener("click", ()=> {
        data=document.querySelector("#i");
        if (data.dataset.status==="0") checkLetterChosen("i");
    })
    document.getElementById("j").addEventListener("click", ()=> {
        data=document.querySelector("#j");
        if (data.dataset.status==="0") checkLetterChosen("j");
    })
    document.getElementById("k").addEventListener("click", ()=> {
        data=document.querySelector("#k");
        if (data.dataset.status==="0") checkLetterChosen("k");
    })
    document.getElementById("l").addEventListener("click", ()=> {
        data=document.querySelector("#l");
        if (data.dataset.status==="0") checkLetterChosen("l");
    })
    document.getElementById("m").addEventListener("click", ()=> {
        data=document.querySelector("#m");
        if (data.dataset.status==="0") checkLetterChosen("m");
    })
    document.getElementById("n").addEventListener("click", ()=> {
        data=document.querySelector("#n");
        if (data.dataset.status==="0") checkLetterChosen("n");
    })
    document.getElementById("o").addEventListener("click", ()=> {
        data=document.querySelector("#o");
        if (data.dataset.status==="0") checkLetterChosen("o");
    })
    document.getElementById("p").addEventListener("click", ()=> {
        data=document.querySelector("#p");
        if (data.dataset.status==="0") checkLetterChosen("p");
    })
    document.getElementById("q").addEventListener("click", ()=> {
        data=document.querySelector("#q");
        if (data.dataset.status==="0") checkLetterChosen("q");
    })
    document.getElementById("r").addEventListener("click", ()=> {
        data=document.querySelector("#r");
        if (data.dataset.status==="0") checkLetterChosen("r");
    })
    document.getElementById("s").addEventListener("click", ()=> {
        data=document.querySelector("#s");
        if (data.dataset.status==="0") checkLetterChosen("s");
    })
    document.getElementById("t").addEventListener("click", ()=> {
        data=document.querySelector("#t");
        if (data.dataset.status==="0") checkLetterChosen("t");
    })
    document.getElementById("u").addEventListener("click", ()=> {
        data=document.querySelector("#u");
        if (data.dataset.status==="0") checkLetterChosen("u");
    })
    document.getElementById("v").addEventListener("click", ()=> {
        data=document.querySelector("#v");
        if (data.dataset.status==="0") checkLetterChosen("v");
    })
    document.getElementById("w").addEventListener("click", ()=> {
        data=document.querySelector("#w");
        if (data.dataset.status==="0") checkLetterChosen("w");
    })
    document.getElementById("x").addEventListener("click", ()=> {
        data=document.querySelector("#x");
        if (data.dataset.status==="0") checkLetterChosen("x");
    })
    document.getElementById("y").addEventListener("click", ()=> {
        data=document.querySelector("#y");
        if (data.dataset.status==="0") checkLetterChosen("y");
    })
    document.getElementById("z").addEventListener("click", ()=> {
        data=document.querySelector("#z");
        if (data.dataset.status==="0") checkLetterChosen("z");
    })

})();
