(()=>{let e="",t="",n=0,o=0,d=0,r=7,a=0;const m=document.querySelector("#hangman").dataset.lang,l="word"+m[0].toUpperCase()+m[1],c="category"+m[0].toUpperCase()+m[1],s=Math.floor(Math.random()*WORDLIST.length),u=WORDLIST[s][l];function y(e){setTimeout(function(){document.getElementById("myModal").style.display="block","win"===e?document.getElementById("win").style.display="block":document.getElementById("lose").style.display="block",document.getElementById("wordAfterGame").innerHTML=u,document.getElementById("wordAfterGameEn").innerHTML=WORDLIST[s].wordEn,document.getElementById("wordAfterGameFr").innerHTML=WORDLIST[s].wordFr,document.getElementById("wordAfterGameIt").innerHTML=WORDLIST[s].wordIt,document.getElementById("wordAfterGameNl").innerHTML=WORDLIST[s].wordNl,document.getElementById("wordAfterGameDe").innerHTML=WORDLIST[s].wordDe},500)}for(e of(document.getElementById("category").innerHTML=WORDLIST[s][c],u))" "===e?t+=" &nbsp; ":"-"===e?t+=" - ":(t=t+"<span id='letter"+n+"'>_</span> ",a++),n++;document.getElementById("wordToGuest").innerHTML=t,document.querySelectorAll(".letter").forEach(t=>t.addEventListener("click",()=>{"0"===document.querySelector("#"+t.id).dataset.status&&function(t){for(e of(n=0,o=0,u))t!==u[n]&&("e"!==t||"é"!==u[n]&&"è"!==u[n]&&"ê"!==u[n]&&"ë"!==u[n])&&("a"!==t||"à"!==u[n]&&"â"!==u[n]&&"ä"!==u[n]&&"á"!==u[n])&&("u"!==t||"ú"!==u[n]&&"ù"!==u[n]&&"û"!==u[n]&&"ü"!==u[n])&&("i"!==t||"í"!==u[n]&&"ì"!==u[n]&&"î"!==u[n]&&"ï"!==u[n])&&("o"!==t||"ó"!==u[n]&&"ò"!==u[n]&&"ô"!==u[n]&&"ö"!==u[n])||(o++,a--,document.getElementById("letter"+n).textContent=u[n],document.getElementById(t).className="letterPickGood"),document.querySelector("#"+t).dataset.status="1",n++;0===o&&(document.getElementById(t).className="letterPickBad",d=document.querySelector("#hangman").dataset.status,d++,r--,document.getElementById("hangman").src="../assets/img/"+d+".png",document.getElementById("hangman").alt="You have "+r+" chances left",document.querySelector("#hangman").dataset.status=d,7===d&&y("lose")),0===a&&y("win")}(t.id)}))})();