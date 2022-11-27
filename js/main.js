// animation 띠 영역
const animation1 = document.querySelector(".ani1");
const animation2 = document.querySelector(".ani2");

// hamberger
const hamburger = document.querySelector(".m-hamburger");
const mNav = document.querySelector(".hamburger-menu");
const mNavWidth = mNav.offsetWidth; 
const hamSpan1 = document.querySelector(".span1");
const hamSpan2 = document.querySelector(".span2");
const hamSpan3 = document.querySelector(".span3");


// 모바일 슬라이드 배너아이템 영역
const swMask = document.querySelector(".swiper-mask");
const items = swMask.querySelectorAll(".item");
const checs = document.querySelectorAll(".chec");

// section1배경움직임 영역
const sec1Bg1 = document.querySelector(".sub-tree-bg1");
const sec1Bg2 = document.querySelector(".sub-tree-bg2");
const sec1Bg3 = document.querySelector(".sub-tree-bg3");
const mainBg = document.querySelector(".main-back-bg");
const mainBtn = document.querySelector(".main-bg-btn");

// 스크롤 컬러 바뀌는 것
const headMenus = document.querySelectorAll(".main-menu li");

// 탑버튼
const topBtn = document.querySelector(".top-btn");

// 서브메뉴 여닫창
const head = document.querySelector(".header")
const subBox = document.querySelector(".banner-sub");
const menus = document.querySelectorAll(".main-menu .menu");
const tabMenus = document.querySelectorAll(".banner-sub .sub-menu");

// 서브메뉴 닫기위한 바디
const subBoxBox  = document.querySelector(".banner-sub-box");

// 모바일 푸터 여닫이
const footerBtns = document.querySelectorAll(".m-footer-button");
const uls = document.querySelectorAll(".m-footer-menu");

// hamberger
let hClickCount = 0;

// 푸터 카운터
let count = 0;

// 애니메이션 띠 슬라이드 translate값
let aniCount1 = 0;
let aniCount2 = 0;

// 모바일 슬라이드 배너 아이템 카운터랑 트랜슬레이트값 

let itemWidth = items[0].clientWidth;
let maskWidth = itemWidth * items.length;

let swiCount = 0;
let translate = 0;

/**hamberger on off */
const hamburgerOn = (e)=>{

  hClickCount += 1
  e.preventDefault()
  if(hClickCount % 2 !==0){
    hamSpan1.style.transform = `rotate(45deg)`
    hamSpan1.style.top = "50%"
    hamSpan2.style.opacity = 0
    hamSpan3.style.transform = `rotate(-45deg)`
    hamSpan3.style.top = "50%"
    mNav.style.transform= "translateX(-400px)"
  }else if(hClickCount % 2 === 0){
    hamSpan1.style.transform = ``
    hamSpan1.style.top = ""
    hamSpan2.style.opacity = 1
    hamSpan3.style.transform = ``
    hamSpan3.style.top = ""
    mNav.style.transform= `translateX(${mNavWidth}px)`
  }
};

// 탭 서브메뉴 함수
const menuTab = (item)=>{
  const tabTarget = item.currentTarget;
  const target = tabTarget.dataset.tab;
  menus.forEach((menu)=>{
      menu.classList.remove("tab");
  })
  tabMenus.forEach((ob)=>{
      ob.classList.remove("target");
  })
  document.querySelector("#"+target).classList.add("target");
  tabTarget.classList.add("tab");
};

/** 탭 서브메뉴 없애주는 함수 */
const subDlete = ()=>{
  subBoxBox.style.display = "none";
  head.style.backgroundColor="transparent"
  menus.forEach((menu)=>{
    menu.classList.remove("tabs");
})
};

/** 모바일 슬라이드 함수 */
const swip = (e)=>{
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

//** settime 함수 */
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



/** 섹션1 페럴뭐시기 효과 함수*/ 
const parllx = ()=>{
  const st = window.scrollY || document.documentElement.scrollTop;
  if(st<=500 || st >2500){
    sec1Bg1.classList.remove("bg");
    sec1Bg2.classList.remove("bg2");
    sec1Bg3.classList.remove("bg3");
    mainBtn.style.zIndex = -1;
  }
  else if(st>=1000 && st<1200){
    // mainBg.style.transform ="translateZ(-250px)"
    sec1Bg1.classList.add("bg");
    setTimeout(()=>{
      mainBtn.style.zIndex = 10;
    },1000);
   
    // sec1Bg1.style.backgroundAttachment ="fixed"
  }else if(st >= 1200 && st<1400){
    sec1Bg2.classList.add("bg2");
  }else if(st >= 1400 && st <2000){
    sec1Bg3.classList.add("bg3");
  }
};

/** 스크롤 함수*/ 
const onScroll = ()=>{
  const st = window.scrollY || document.documentElement.scrollTop;
  const sec2 = document.querySelector(".section2").offsetTop -800;
  const sec3 = document.querySelector(".section3").offsetTop;
  if((st >=0 && st < sec2 )|| (st >= sec3)){
    for(const headMenu of headMenus){
      headMenu.style.color = ""
    }

    hamSpan1.style.backgroundColor = ""
    hamSpan2.style.backgroundColor = ""
    hamSpan3.style.backgroundColor = ""
  }else{
    for(const headMenu of headMenus){
      headMenu.style.color = "#343434"
    }

    hamSpan1.style.backgroundColor = "#343434"
    hamSpan2.style.backgroundColor = "#343434"
    hamSpan3.style.backgroundColor = "#343434"
  }
}

/** 탑버튼 함수*/ 
const goTop = ()=>{
  const ww = document.documentElement.clientWidth;
  const wy = window.scrollY || document.documentElement.scrollTop || window.pageYOffset;
  if(ww > 500){
    if(wy !== 0){
      setTimeout(()=>{
          window.scrollTo(0, window.scrollY-50);
          goTop()
      }, 1)
    }
  }else if(ww<=500){
    window.scrollTo({top: 0, behavior:"smooth"});
  }
}

/**얘도 스크롤함수 **/ 
const hidden = ()=>{
  const st = window.scrollY || document.documentElement.scrollTop;
  const sec3 = document.querySelector(".section3").offsetTop;
  const s= topBtn.querySelector("span");
  if(st < 500){
    topBtn.style.display  = "none"
  }else if(st >= sec3){
    topBtn.style.display = "flex"
    topBtn.style.borderColor = "#fff"
    s.style.color = "#fff"
  }else{
    topBtn.style.display = "flex"
    topBtn.style.borderColor = "#343434"
    s.style.color = "#343434"
  }
};

/** 애니메이션 띄 무한루프 함수 */
const animations = (count, element, direction) => {
  if(count > element.scrollWidth /2){
    element.style.transform = "translateX(0)"
    count = 0;

  }
  element.style.transform = `translateX(${count*direction}px)`
  
  return count
}

/** 애니메이션 계속 보여지게 해주는 함수 */
const animate =()=>{
  aniCount1++
  aniCount2++


  aniCount1= animations(aniCount1,animation1,-1);
  aniCount2= animations(aniCount2,animation2, -1);

  window.requestAnimationFrame(animate);
}

const footerFunction = (item)=>{
  count+=1;

  const itemTarget = item.currentTarget;
  const data = itemTarget.dataset.footer;
  footerBtns.forEach((btn)=>{
      btn.classList.remove("footer-active");
  });
  uls.forEach((ul)=>{
      ul.classList.remove("footer-show");
  })
  document.querySelector(`#` + data).classList.add("footer-show");
  itemTarget.classList.add("footer-active");
  if(count % 2 === 0){
      document.querySelector(`#` + data).classList.remove("footer-show");
      itemTarget.classList.remove("footer-active");
      count=0;
  }
};


window.addEventListener("resize",()=>{
  itemWidth = items[0].clientWidth
  itemWidth = items[1].clientWidth
  itemWidth = items[2].clientWidth
  itemWidth = items[3].clientWidth
  itemWidth = items[4].clientWidth
  translate=0;
  swiCount=0;
  checs[0].checked = true;
  swMask.style.transform = `translateX(${translate}px)`
})

/**hamberger */
hamburger.addEventListener("click",hamburgerOn);

/** 서브 탬메뉴 작동 함수 */
menus.forEach((item)=>{
  item.addEventListener("click",(e)=>{
      subBoxBox.style.display = "block"
      head.style.backgroundColor="#fff";
      menus.forEach((menu)=>{
          menu.classList.add("tabs");
      })
      menuTab(e)
  });
})
// esc눌렀을때 메뉴 닫힘
window.addEventListener("keyup",(e)=>{
  if(e.keyCode ===27){
    subDlete()
  }
});

// 바디 눌렀을때 닫힘
subBoxBox.addEventListener("click",(e)=>{
  if(e.target === e.currentTarget){
    subDlete();
  }
})

// 모바일 슬라이드 클릭
checs.forEach((item, index)=>{
  item.addEventListener("click",(e)=>{
    translate = -itemWidth * index;
    swiCount = index;
    swMask.style.transform = `translateX(${translate}px)`
  })
})

// 푸터 여닫이 작동함수
footerBtns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
      footerFunction(e)
  });
})

// 탑버튼 작동함수
topBtn.addEventListener("click",goTop);
// 애니메이트 작동함수
animate();
// 윈도우 스크롤 통합 합수
window.addEventListener("scroll",()=>{
  aniCount1 +=15;
  aniCount2 +=15;
  parllx();
  onScroll();
  hidden();
  subDlete();
  mNav.style.transform = `translateX(${mNavWidth}px)`
  hamSpan1.style.transform = ``
  hamSpan1.style.top = ""
  hamSpan2.style.opacity = 1
  hamSpan3.style.transform = ``
  hamSpan3.style.top = ""
})
parllx();
onScroll();
hidden();
interval();