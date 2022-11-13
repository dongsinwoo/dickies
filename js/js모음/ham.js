
const hamburger = document.querySelector(".m-hamburger");
const mNav = document.querySelector(".m-nav");
const hamSpan1 = document.querySelector(".span1");
const hamSpan2 = document.querySelector(".span2");
const hamSpan3 = document.querySelector(".span3");

let hClickCount = 0;

const hamburgerOn = (e)=>{
    hClickCount += 1
    e.preventDefault()
    if(clickCount % 2 !==0){
      hamSpan1.style.transform = `rotate(45deg)`
      hamSpan1.style.top = "50%"
      hamSpan2.style.opacity = 0
      hamSpan3.style.transform = `rotate(-45deg)`
      hamSpan3.style.top = "50%"
      mNav.style.display= "flex"
    }else if(clickCount % 2 === 0){
      hamSpan1.style.transform = ``
      hamSpan1.style.top = ""
      hamSpan2.style.opacity = 1
      hamSpan3.style.transform = ``
      hamSpan3.style.top = ""
      mNav.style.display= "none"
    }
  };

  hamburger.addEventListener("click",hamburgerOn);