const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
navBtn.onclick = () => {
    if(nav.classList.toggle('open')){
        navBtnImg.src = 'image/icons/NAV CLOSE.svg';
    }else{
        navBtnImg.src = 'image/icons/NAV.svg';
    }
}