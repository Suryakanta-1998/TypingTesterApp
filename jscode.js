
let lessonsArray = ["The quick brown fox jumps over the lazy dog","Science is organized knowledge. Wisdom is organized life.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","Life isn’t about finding yourself, life is about creating yourself","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","If you have the guts to keep making mistakes, your wisdom and intelligence leap forward with huge momentum.","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","Silence is the sleep that nourishes wisdom."];
let originalTextTag=document.querySelector('#original-text');
let textAreaBoxTag=document.querySelector('#text-area');
let secondsTag=document.querySelector('#seconds');
let minutesTag=document.querySelector('#minutes');
let resetBtn=document.querySelector('#reset')
let milliSecondsTag=document.querySelector('#m-seconds');
let congoTag=document.querySelector('#congo')
let congratsSection=document.querySelector('.cong-section');
let claps=document.querySelector('#claps')
let minutes=0;
let seconds=0;
let milliSeconds=0;
let count=0;
let timerRunning=false;
let interval=null;


//start Timer

let startTimer=()=>
{

    count++;
    minutes=Math.floor((count/100)/60);
    seconds=Math.floor((count/100)-(minutes*60));
    milliSeconds=Math.floor(count-(seconds*100)-(minutes*6000));

    minutesTag.innerText=leadingZero(minutes);
    secondsTag.innerText=leadingZero(seconds);
    milliSecondsTag.innerText=leadingZero(milliSeconds);
}

//leading Zero

let leadingZero=(time)=>
{
    if(time<10)
    {
        return '0'+time;
    }
    else
    {
        return time;
    }
}

textAreaBoxTag.addEventListener('keyup',function()
{
    let textEnteredLength=textAreaBoxTag.value.length;
    if(textEnteredLength=== 1 && !timerRunning)
    {
        //start timer
        //startTimer();
        interval=setInterval(startTimer,10);
        timerRunning=true;

    }
    let originalText=originalTextTag.innerText;
    let textEntered=textAreaBoxTag.value;
    let partialText=originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});

//evaluate Text

let evaluateText=(originalText,textEntered,partialText)=>
{
    if(textEntered==='')
    {
        //grey
        applyColors('grey');
    }
    else
    {
        if(originalText===textEntered)
    {
        //green
        claps.play();
        applyColors('green');
        congoTag.style.display='block';
        clearInterval(interval);
    }
    else
    {
        if(textEntered===partialText)
        {
            //blue
            applyColors('blue');
        }
        else
        {
            //red
            applyColors('red');
        }
    }
    }
}

//apply colors

let applyColors=(color)=>
{
    textAreaBoxTag.style.borderColor=color;
    textAreaBoxTag.style.boxShadow=`0 0 10px ${color}`;
}

resetBtn.addEventListener('click',function()
{
    minutes=0;
    seconds=0;
    milliSeconds=0;
    count=0;
    clearInterval(interval);
    minutesTag.innerText="0"+minutes;
    secondsTag.innerText="0"+seconds;
    milliSecondsTag.innerText="0"+milliSeconds;
})
//change Text

let changeText=(index)=>
{
    let lessonText=lessonsArray[index];
    originalTextTag.innerText=lessonText;
}




