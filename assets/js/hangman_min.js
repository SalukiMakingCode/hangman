(()=>{let e="",t="",n=0,o=0,d=0,m=7,l=0,r=document.querySelector("#hangman").dataset.lang,a="word"+r[0].toUpperCase()+r[1],c="category"+r[0].toUpperCase()+r[1],s=Math.floor(Math.random()*WORDLIST.length),u=WORDLIST[s][a].split("");function y(e){setTimeout(function(){document.getElementById("myModal").style.display="block","win"===e?document.getElementById("win").style.display="block":document.getElementById("lose").style.display="block",document.getElementById("wordAfterGame").innerHTML=u,document.getElementById("wordAfterGameEn").innerHTML=WORDLIST[s].wordEn,document.getElementById("wordAfterGameFr").innerHTML=WORDLIST[s].wordFr,document.getElementById("wordAfterGameIt").innerHTML=WORDLIST[s].wordIt,document.getElementById("wordAfterGameNl").innerHTML=WORDLIST[s].wordNl,document.getElementById("wordAfterGameDe").innerHTML=WORDLIST[s].wordDe},500)}for(e of(document.getElementById("category").innerHTML=WORDLIST[s][c],u))" "===e?t+=" &nbsp; ":"-"===e?t+=" - ":(t=t+"<span id='letter"+n+"'>_</span> ",l++),n++;document.getElementById("wordToGuest").innerHTML=t,document.querySelectorAll(".letter").forEach(t=>t.addEventListener("click",()=>{"0"===document.querySelector("#"+t.id).dataset.status&&function(t){for(e of(n=0,o=0,u))t===u[n]&&(o++,l--,document.getElementById("letter"+n).textContent=t,document.getElementById(t).className="letterPickGood"),document.querySelector("#"+t).dataset.status=1,n++;if("a"===t)for(e of(n=0,u))"à"!==u[n]&&"â"!==u[n]&&"ä"!==u[n]&&"á"!==u[n]||(o++,l--,document.getElementById("letter"+n).textContent=u[n],document.getElementById(t).className="letterPickGood"),document.querySelector("#"+t).dataset.status=1,n++;if("e"===t)for(e of(n=0,u))"é"!==u[n]&&"è"!==u[n]&&"ê"!==u[n]&&"ë"!==u[n]||(o++,l--,document.getElementById("letter"+n).textContent=u[n],document.getElementById(t).className="letterPickGood"),document.querySelector("#"+t).dataset.status=1,n++;if("i"===t)for(e of(n=0,u))"í"!==u[n]&&"ì"!==u[n]&&"î"!==u[n]&&"ï"!==u[n]||(o++,l--,document.getElementById("letter"+n).textContent=u[n],document.getElementById(t).className="letterPickGood"),document.querySelector("#"+t).dataset.status=1,n++;if("o"===t)for(e of(n=0,u))"ó"!==u[n]&&"ò"!==u[n]&&"ô"!==u[n]&&"ö"!==u[n]||(o++,l--,document.getElementById("letter"+n).textContent=u[n],document.getElementById(t).className="letterPickGood"),document.querySelector("#"+t).dataset.status=1,n++;if("u"===t)for(e of(n=0,u))"ú"!==u[n]&&"ù"!==u[n]&&"û"!==u[n]&&"ü"!==u[n]||(o++,l--,document.getElementById("letter"+n).textContent=u[n],document.getElementById(t).className="letterPickGood"),document.querySelector("#"+t).dataset.status=1,n++;0===o&&(document.getElementById(t).className="letterPickBad",d=document.querySelector("#hangman").dataset.status,d++,m--,document.getElementById("hangman").src="../assets/img/"+d+".png",document.getElementById("hangman").alt="You have "+m+" chances left",document.querySelector("#hangman").dataset.status=d,7===d&&y("lose")),0===l&&y("win")}(t.id)}))})();