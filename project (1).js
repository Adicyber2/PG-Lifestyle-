const pop=document.querySelector(".pop");
    const btn=document.querySelector(".btn");
    btn.addEventListener("click", function(){
      pop.style.display='block';
      logpop.style.display='none';
    });
    
    // CLOSE 
    function remove(){
      pop.style.display='none';
      
    };
    function remove2(){
      logpop.style.display='none';
      
    };
    
    //Cheack password correct or not
    const pass1=document.getElementById("pass1");
    const pass2=document.getElementById("pass2");
    function check(){
      if(pass1.value==pass2.value){
        alert('signup successfuly');
        return true;
      }else{
        alert('password miss match try agein');
        return false;
      }
    };
    
    const log=document.querySelector("#login");
    const logpop=document.querySelector(".logpop");
    function corona(){
      
      logpop.style.display='block';
      pop.style.display='none';
    };
    
    
    
    
    //Image section
    
    
    const mumbai=document.getElementById("mumbai");
    function next(){
      window.location.href="pop.html";
    };
    
    function banglore(){
      window.location.href="Bangalore.html";
    };
    
    
    gsap.from("#navbar",{
    y:10,
    opacity:0,
    delay:1,
    duration:1
  })
  