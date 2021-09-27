(() => {
    // set variable
    let elem="";
    let wordToGuestFirstSetHtml="";
    let i=0;
    let youFind=0;
    let statutHangman=0;
    let chanceLeft=7;
    let numberLetterToGuest=0;
    const lang=document.querySelector("#hangman").dataset.lang;
    const langWordName="word" + lang[0].toUpperCase() + lang[1] ;
    const langWordCategory="category" + lang[0].toUpperCase() + lang[1] ;
    const wordIdDraw = Math.floor(Math.random() * WORDLIST.length);
    const wordToGuest = WORDLIST[wordIdDraw][langWordName];
    // create function to check letter after an user had choose a new one and check if the game is over
    function checkLetterChosen(letter) {
        i=0; youFind=0;
        for (elem of wordToGuest) {
            if (letter===wordToGuest[i] || (letter==="e" && ("é" === wordToGuest[i] || "è" === wordToGuest[i] ||
               "ê" === wordToGuest[i] || "ë" === wordToGuest[i])) || (letter==="a" && ("à" === wordToGuest[i] || "â" === wordToGuest[i]
                || "ä" === wordToGuest[i] || "á" === wordToGuest[i])) || (letter==="u" && ("ú" === wordToGuest[i] ||
                "ù" === wordToGuest[i] || "û" === wordToGuest[i] || "ü" === wordToGuest[i])) || (letter==="i" &&
                ("í" === wordToGuest[i] || "ì" === wordToGuest[i] || "î" === wordToGuest[i] || "ï" === wordToGuest[i])) ||
                (letter==="o" && ("ó" === wordToGuest[i] || "ò" === wordToGuest[i] || "ô" === wordToGuest[i] || "ö" === wordToGuest[i]))) {
                youFind++; numberLetterToGuest--;
                document.getElementById("letter"+i).textContent=wordToGuest[i];
                document.getElementById(letter).className="letterPickGood";
            }
            document.querySelector("#"+letter).dataset.status="1";
            i++;
        }
        if (youFind===0) {
            document.getElementById(letter).className="letterPickBad";
            statutHangman=document.querySelector("#hangman").dataset.status;
            statutHangman++; chanceLeft--;
            document.getElementById("hangman").src="../assets/img/" + statutHangman + ".png";
            document.getElementById("hangman").alt="You have " + chanceLeft + " chances left";
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
            document.getElementById("myModal").style.display = "block";
            statut==="win" ? document.getElementById("win").style.display = "block" : document.getElementById("lose").style.display = "block";
            document.getElementById("wordAfterGame").innerHTML=wordToGuest;
            document.getElementById("wordAfterGameEn").innerHTML=WORDLIST[wordIdDraw]["wordEn"];
            document.getElementById("wordAfterGameFr").innerHTML=WORDLIST[wordIdDraw]["wordFr"];
            document.getElementById("wordAfterGameIt").innerHTML=WORDLIST[wordIdDraw]["wordIt"];
            document.getElementById("wordAfterGameNl").innerHTML=WORDLIST[wordIdDraw]["wordNl"];
            document.getElementById("wordAfterGameDe").innerHTML=WORDLIST[wordIdDraw]["wordDe"];
        }, 500);
    }
    // set first screen
    document.getElementById("category").innerHTML=WORDLIST[wordIdDraw][langWordCategory];
    for (elem of wordToGuest) {
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
    document.querySelectorAll('.letter').forEach((element) =>
    element.addEventListener('click', () => {
        if (document.querySelector("#" + element.id).dataset.status==="0") checkLetterChosen(element.id);
    }));
})();