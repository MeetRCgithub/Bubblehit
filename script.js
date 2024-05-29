
var btm = document.querySelector(".bottom");


var score = 0;
function scoreinc(){
    score += 100;
    document.querySelector("#scval").textContent = score;
}

var clknum;
function codehit(){
    var rn = Math.floor(Math.random()*15);
    document.querySelector("#hitval").textContent = rn;
    
    btm.addEventListener('click',(det)=>{
      clknum = Number(det.target.textContent);
      if(clknum === rn){
        scoreinc();
        codehit();
        makebubble();
        // timer();
      }
      else{
        gameover();
        stoptime();
      }
    })
}
codehit();

var time;
function stoptime(){
    time = 0;
}

function timer(){
    time = 15;
    var timeint = setInterval(() => {
        if (time>=0) {
            document.querySelector("#timeval").textContent = time;
            time--;
        }
        else{
            clearInterval(timeint);
            gameover();
        }

    }, 1000);
}
timer();

function makebubble() {
    var btm = document.querySelector(".bottom");
    var cont = '';
    var rnd;
    for (var i = 0; i < 170; i++) {
        rnd = Math.floor(Math.random() * 15);
        cont += `<div class="bubbles">${rnd}</div>`
    }
    btm.innerHTML = cont;
}
makebubble();


function gameover() {
    btm.innerHTML = `<h1> Game is over </h1> <br>   <p>Your score is:<H2>${score}</h2></p> <button onclick="window.location.reload();" id="btnsub" >Start</button>`
        btm.style.flexDirection = "column";
        btm.style.fontSize = "30px";
        btm.style.color = "green";

        var btns = document.querySelector("#btnsub");
        btns.style.padding = "10px";
        btns.style.fontSize = "20px";
        btns.style.backgroundColor = "black";
        btns.style.border = "2px solid green";
        btns.style.borderRadius = "10px";
        btns.style.color = "green";
        btns.style.margin = "20px";
        btm.style.fontWeight = 600 ;

    }
    