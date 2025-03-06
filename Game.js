let scr=document.querySelector("#scrImg");
let ppr=document.querySelector("#pprImg");
let rk=document.querySelector("#rkImg");
let txt=document.querySelector("#displayText");
let youScore=document.querySelector("#youScore");
let compScore=document.querySelector("#compScore");
const tap=new Audio('tap-notification-180637.mp3');
let cscore=0;
let yscore=0;
let select="";
let target="";
let reset=document.querySelector("#rst");
let ntfy=document.querySelector("#notify");
let dsply=document.getElementById("display");
const random=()=>{
    let rdm=Math.floor((Math.random()*10)+1);
    if(rdm<=3)
    {
        select="rock";
    }
    else if(rdm<=6)
    {
        select="paper";
    }
    else
    {
        select="scissor";
    }
    return select;
}
scr.addEventListener("click",()=>
{
    tap.play();
    running("scissor");
})
ppr.addEventListener("click",()=>
{
    tap.play();
    running("paper");
})
rk.addEventListener("click",()=>
{
    tap.play();
    running("rock");
})

const running=(target)=>{
    var check=random();
    if(check==target)
    {
        txt.textContent="Draw!You Both Picked The Same";
        dsply.style.background="purple";   
    }
    else if(check=="rock" && target=="paper")
    {
        txt.textContent="You Won!";
        dsply.style.background="rgb(5, 220, 5)";
        yscore++;
        youScore.textContent=yscore;
    }
    else if(check=="paper" && target=="scissor")
    {
        txt.textContent="You Won!";
        dsply.style.background="rgb(5, 220, 5)";
        yscore++;
        youScore.textContent=yscore;
    }
    else if(check=="scissor" && target=="rock")
    {
        txt.textContent="You Won!";
        dsply.style.background="rgb(5, 220, 5)";
        yscore++;
        youScore.textContent=yscore;
    }
    else{
        txt.textContent="You Lost!";
        dsply.style.background="red";
        cscore++;
        compScore.textContent=cscore;
    }
    ntfy.textContent=`The Computer Picked ${check}`;
}
reset.addEventListener("click",()=>
{
    let rAudio=new Audio("mixkit-quick-win-video-game-notification-269.wav")
    rAudio.play();
    yscore=0;
    cscore=0;
    youScore.textContent=yscore;
    compScore.textContent=cscore;

    txt.textContent="Pick One!";
    dsply.style.background="rgb(5, 220, 5);";
})