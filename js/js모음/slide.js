const swMask = document.querySelector(".swiper-mask");
const items = swMask.querySelectorAll(".item");
const checs = document.querySelectorAll(".chec");


const itemWidth = items[0].clientWidth;
const maskWidth = itemWidth * items.length;

let swiCount = 0;
let translate = 0;

const swip = ()=>{
  if(swiCount === 4){
    translate = 0;
    swiCount = 0;
    swMask.style.transform = `translateX(${translate}px)`
  }else{
    swiCount+=1
    translate-=itemWidth
    swMask.style.transform = `translateX(${translate}px)`
  }
}



checs.forEach((item, index)=>{
  item.addEventListener("click",(e)=>{
    translate = -itemWidth * index;
    swiCount = index;
    swMask.style.transform = `translateX(${translate}px)`
  })
})

const interval= ()=>{
  setTimeout(()=>{
    if(swiCount ===0){
      checs[1].checked = true;
    }else if(swiCount === 1){
      checs[2].checked = true;
    }else if(swiCount === 2){
      checs[3].checked = true;
    }else if(swiCount === 3){
      checs[4].checked = true;
    }else if(swiCount === 4){
      checs[0].checked = true;
    }
    swip();
    interval();
  },3000)
} 
interval();