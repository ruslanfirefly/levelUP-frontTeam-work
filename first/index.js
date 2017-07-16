let temp=document.getElementsByClassName("services");
let appead1=document.getElementById("service1");
    appead2=document.getElementById("service2");
    appead3=document.getElementById("service3");
window.onscroll=function take_serv(){
    let scrolled = window.pageYOffset||document.documentElement.scrollTop;
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