/* console.log("Script loaded");

var tl= gsap.timeline();

tl 
    .to("#fs",{
        height:0,
        duration:2,
        ease: Expo.easeInOut
    })
    .to("#elem",{
        height:"100%",
        duration:2,
        delay:-2,
        ease: Expo.easeInOut
    })
    .to("#white", {
        height: "100%",
        duration: 2,
        delay: -1.6,
        ease: Expo.easeInOut
    })  */

function valueSetters(){
    gsap.set("#nav a",{y:"-100%",opacity:0})
    gsap.set(".home .parent .child",{y:"100%"})
    gsap.set(".home .row img",{opacity:0})
}

function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        var parent=document.createElement("span");
        var child=document.createElement("span");

        parent.classList.add("parent");
        child.classList.add("child");
        

        child.innerHTML=elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML="";
        elem.appendChild(parent);
    })
}
function animateHomepage(){
    var tl=gsap.timeline();
    tl
    .to("#nav a",{
        y:0,
        opacity:1,
        stagger: .05,
        ease: Expo.easeInOut
    })
    .to(".home .parent .child",{
        y:0,
        duration:1.5,
        stagger: .1,
        ease: Expo.easeInOut
    })
    .to(".home .row img",{
       opacity:1,
       delay:-.5,
       ease:Expo.easeInOut
    })
 
}
function loaderAnimation(){
    var tl= gsap.timeline();
    tl
        .from("#loader .child span",{
            x:100,
            duration: 1.4,
            stagger:.2,
            ease:Power3.easeInOut
    })    
    .to("#loader .parent .child",{
        y:"-100%",
        duration: 1,
        
        ease:Circ.easeInOut
    })      
    .to("#loader",{
        height:0,
        duration: 1,
        ease:Circ.easeInOut
    })      
    
    .to("#green",{  
        height:"100%",
        top:0, 
        duration: 1,
        delay:-.5,
        ease:Circ.easeInOut
    })  
    .to("#green",{
        height:"0%",
        duration: 1,
        delay:-.3,
        ease:Circ.easeInOut,
        onComplete: function(){
            animateHomepage();
        }
    })  
    
}

revealToSpan();
valueSetters();
loaderAnimation();
