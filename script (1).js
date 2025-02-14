const popup=document.querySelector(".full");
    const filter=document.getElementById("filter1");
    let main=document.querySelector(".main");
    filter1.addEventListener("click",function(){
      popup.style.display='block';
      main.style.backgroundColor='rgba(0,0,0,0.208)'
    });
    
    function close1(){
      const close=document.getElementById("close");
      popup.style.display='none';
      main.style.opacity='1';
      main.style.backgroundColor='rgba(0,0,0,0)'
      
    };
    
    function shift(){
      const shift=document.getElementById("btn");
      window.location.href='mumbai-list.html';
    }
    
    
    //GSPA
    
    var tl2=gsap.timeline({
      scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 30%",
        end:"top 0",
        scrub:2,
      }
    })
    tl2.from("#first",{
      x:-100,
      opacity:0,
      delay:1,
      duration:1
      
    })
    tl2.from(" #second ",{
      x:100,
      opacity:0,
      delay:1.5,
      duration:1.3
      
    })
    tl2.from(" #third ",{
      x:-100,
      opacity:0,
      delay:2,
      duration:1.6
      
    })