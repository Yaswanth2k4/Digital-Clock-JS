const header=document.createElement('header');
const title = document.createElement('h2');
title.innerText="DIGITAL CLOCK";
title.className="title";

header.appendChild(title);
document.body.appendChild(header);

const container=document.createElement('div');
container.className='container';
document.body.appendChild(container);

const showTime=document.createElement('div');
showTime.className='showTime';
container.appendChild(showTime);
var currentTime=document.createElement('p');

var time=function()
{
    let date=new Date();
    currentTime.className="currentTime";
    currentTime.innerText=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    showTime.appendChild(currentTime);
}

var timeInterval=setInterval(time,1000);

var restart=function(){
    timeInterval=setInterval(time,1000);
}

var clearTime=function(){
    clearInterval(timeInterval);
}

var date=new Date();
const currentDate=document.createElement('p');
currentDate.className="currentDate";
currentDate.innerText=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
container.appendChild(currentDate);

const stop=document.createElement('button');
stop.innerText='Stop';
const start=document.createElement('button');
start.innerText='Start';
start.type="button";
stop.type="button";
stop.className='stop';
start.className='stop';

container.appendChild(stop);
container.appendChild(start);

stop.addEventListener("click",clearTime);
stop.addEventListener("mouseover",function(){
    stop.className="stopMouseOver";
})
stop.addEventListener("mouseout",function(){
    stop.className="stop";
});

start.addEventListener("click",restart);
start.addEventListener("mouseover",function(){
    start.className="stopMouseOver";
})
start.addEventListener("mouseout",function(){
    start.className="stop";
});
