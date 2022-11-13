const head = document.querySelector(".header")
const subBox = document.querySelector(".banner-sub");
const menus = document.querySelectorAll(".main-menu .menu");
const tabMenus = document.querySelectorAll(".banner-sub .sub-menu");




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

menus.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        subBox.style.display = "flex"
        head.style.backgroundColor="#fff";
        menus.forEach((menu)=>{
            menu.style.color= "#a8a8a8";
            item.style.color= "#343434";
        })
        menuTab(e)
    });
})
