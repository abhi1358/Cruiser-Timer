chrome.runtime.getBackgroundPage(function(bg){
    if(bg.sessionDataHTML){
        document.body.innerHTML = bg.sessionDataHTML; 
    }
    setInterval(function(){
        bg.sessionDataHTML = document.body.innerHTML
    },1000);    

    var chromeTimer;
    chromeTimer.addEventListener('click', () => {
        console.log("chrome event listener");
        chromeTimer.window();
        chromeTimer.clearInterval();
    })
    
});




const startTimer = document.querySelector('.start');
const resetTimer = document.querySelector('.reset');

const hrs=document.querySelector('.hrs');
const mins=document.querySelector('.mins');
const secs=document.querySelector('.secs');

const items = document.querySelector('ol');
console.log(items);  

console.log(hrs,mins,secs);
let cruiserTimer;
let csecs=0,cmins=0,chrs=0;
let dsecs,dmins,dhrs;
startTimer.addEventListener('click',()=> {
    alert("adding event Listener");
    
    if(startTimer.textContent=="Mark") {
        const item = document.createElement('li');
        item.textContent=`${dhrs}:${dmins}:${dsecs}`;
        items.append(item);
        // clearInterval(cruiserTimer);
        // startTimer.textContent="Start";
        return;
    }
    
    cruiserTimer = setInterval(()=>{
        alert("setting interval");
        // console.log(chrs,cmins,csecs);
        csecs++;
        if(csecs==60) {
            csecs=0;
            cmins++;
            if(cmins==60){
                cmins=0;
                chrs++;
            }
        }
        dsecs = csecs;
        dmins = cmins;
        dhrs = chrs;
        if(csecs<10) dsecs="0"+csecs;
        if(cmins<10) dmins="0"+cmins;
        if(chrs<10) dhrs = "0"+chrs;
        secs.textContent = dsecs;
        mins.textContent = dmins;
        hrs.textContent  = dhrs;
        if(cmins>5) {
            secs.color = "red";
            mins.color = "red";
            hrs.color = "red";
        }
    },1000);
    startTimer.textContent="Mark";
});


resetTimer.addEventListener('click',()=>{
    if(startTimer.textContent=="Mark"){
        clearInterval(cruiserTimer);
        startTimer.textContent="Start";
    }
    chrs=0;
    cmins=0;
    csecs=0;
    hrs.textContent="00";
    mins.textContent="00";
    secs.textContent="00";
    secs.color = "black";
    mins.color = "black";
    hrs.color = "black";
});

const dashboard = document.querySelector('.dashboard');
dashboard.addEventListener('click',()=>{
    window.open(
        'http://127.0.0.1:5500',
        '',
        'width=300,height=200'
    );
});

