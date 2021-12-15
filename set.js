let counter=0;
let setInterval_id=null;
let timer_callback=function(){
    counter++;
    document.getElementById('timer_op').innerText=counter;
}
  
setInterval_id = setInterval(timer_callback,1000);

let pause_timer_btn = document.getElementById('pause_timer');
pause_timer_btn.addEventListener('click',function(){
    clearInterval(setInterval_id);
});

let resume_timer_btn = document.getElementById('resume_timer');
resume_timer_btn.addEventListener('click',function(){
    setInterval_id = setInterval(timer_callback,1000);
});

let reset_timer_btn = document.getElementById('reset_timer');
reset_timer_btn.addEventListener('click',function(){
    clearInterval(setInterval_id);
    counter = 0;
    document.getElementById('timer_op').innerText = counter;
});

   // console.log('count');
  

//setInterval(cb,1000);
//let restart_timer_btn = document.getElementById('restart_timer');
//restart_timer_btn.addEventListener('click',fn(){
  //  counter = 0;
   //// document.getElimentById('timer_op').innerText=counter;
//})