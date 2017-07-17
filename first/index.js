let temp=document.getElementsByClassName("services");
let appead1=document.getElementById("service1");
    appead2=document.getElementById("service2");
    appead3=document.getElementById("service3");
var numb_move1=document.getElementById("num1");
var numb_move2=document.getElementById("num2");
var numb_move3=document.getElementById("num3");
var bar1=document.getElementById("bar1");
var bar2=document.getElementById("bar2");
var bar3=document.getElementById("bar3");
var numb1=2141;
    numb2=3141;
    numb3=5541;
    number1=0;
    number2=0;
    number3=0;
    width1=100;
    wid1=0;
    width2=100;
    wid2=0;
    width3=100;
    wid3=0;
window.onscroll=function take_serv(){
    let scrolled = window.pageYOffset;
    if(scrolled>1000){
       appead1.style.opacity='1';
       appead2.style.opacity='1';
       appead3.style.opacity='1';
    }
    else if(scrolled<1321){
       appead1.style.opacity='0';
       appead2.style.opacity='0';
       appead3.style.opacity='0';
    }
    if(scrolled>1399){
        function move_number1(){
            setInterval(()=>{
                if(number1!=numb1){
                    number1=number1+1;
                    numb_move1.innerHTML=number1;
                    
                    setInterval(move_number1,50);
                }
            },50);
        }
        function move_number2(){
            setInterval(()=>{
                if(number2!=numb2){
                    number2=number2+1;
                    numb_move2.innerHTML=number2;
                    setInterval(move_number2,50);
                }
            },50);
        }
        function move_number3(){
            setInterval(()=>{
                if(number3!=numb3){
                    number3=number3+1;
                    numb_move3.innerHTML=number3;
                    setInterval(move_number3,50);
                }
            },50);
        }
        setTimeout(move_number1,1000);
        setTimeout(move_number2,1000);
        setTimeout(move_number3,1000);
        function move_bar1(){
            setTimeout(()=>{
                if(wid1!=width1){
                    wid1=wid1+1;
                    bar1.style.width=wid1+'%';
                    
                    setInterval(move_bar1,50);
                }
            },50);
        }
        function move_bar2(){
            setTimeout(()=>{
                if(wid2!=width2){
                    wid2=wid2+1;
                    bar2.style.width=wid2+'%';
                    setInterval(move_bar2,50);
                }
            },50);
        }
        function move_bar3(){
            setTimeout(()=>{
                if(wid3!=width3){
                    wid3=wid3+1;
                    bar3.style.width=wid3+'%';
                    setInterval(move_bar3,50);
                }
            },50);
        }
        setTimeout(move_bar1,1000);
        setTimeout(move_bar2,1000);
        setTimeout(move_bar3,1000);
    }
}
let tick=0;
let tack=0;
setTimeout(()=>{
    document.onmousewheel=document.onwheel=function(){ 
	return false;
    };
    document.addEventListener("MozMousePixelScroll",function(){return false},false);
    document.onkeydown=function(e) {
	if (e.keyCode>=33&&e.keyCode<=40) return false;
}
},1);
setTimeout(preloader,500)
function preloader(){
    let poload=document.getElementById('preloder');
    let prel_1=document.getElementById('preload1');
    let prel_2=document.getElementById('preload2');
    let prel_3=document.getElementById('preload3');
    let prel_4=document.getElementById('preload4');
    let prel_5=document.getElementById('preload5');
    let prel_6=document.getElementById('preload6');
    let prel_7=document.getElementById('preload7');
    let prel_8=document.getElementById('preload8');
    let prel_9=document.getElementById('preload9');
    let prel_10=document.getElementById('preload10');
    let arr=[prel_1,prel_2,prel_3,prel_4,prel_5,prel_6,prel_7,prel_8,prel_9,prel_10];
    if(tick!=10){
        arr[tick].style.opacity=1;
        tick++;
    }
    else if(tick==10&&tick!=20){
        arr[tack].style.opacity=0;
        tack++;
    }
    if(tack==10){
        setTimeout(()=>{
            poload.style.opacity=0;
            poload.style.zIndex=-1;
            window.scrollTo(0,0);
            setTimeout(()=>{
                document.onmousewheel=document.onwheel=function(){ 
                return true;
                };
                document.addEventListener("MozMousePixelScroll",function(){return true},true);
                document.onkeydown=function(e) {
                    if (e.keyCode>=33&&e.keyCode<=40) return true;
                }
            },1000);
        },1000);
    }
    setTimeout(preloader,100);
}
clearTimeout();
clearInterval();
