// 스크립트 남은거
// 햄버거 버튼
// 스와이퍼

const footerBtns = document.querySelectorAll(".m-footer-button");
const uls = document.querySelectorAll(".m-footer-menu");

let count = 0;

footerBtns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        footerFunction(e)

    });
})


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
    }
};

