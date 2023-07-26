// HIỂN THỊ THỨ NGÀY THÁNG NĂM
const calender = document.querySelector('.header__calander')
var date = new Date();
// get DD/MM/YY
var DMY = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
var current_day = date.getDay();
var day_name = '';
// loop to fit case
switch (current_day) {
case 0:
    day_name = "Chủ nhật, ";
    break;
case 1:
    day_name = "Thứ hai, ";
    break;
case 2:
    day_name = "Thứ ba, ";
    break;
case 3:
    day_name = "Thứ tư, ";
    break;
case 4:
    day_name = "Thứ năm, ";
    break;
case 5:
    day_name = "Thứ sau, ";
    break;
case 6:
    day_name = "Thứ bảy, ";
}
 
calender.innerHTML = day_name + DMY;


// SỬ  DỤNG LIBRARY SLICK JQUERY ĐỂ TẠO CAROUSEL TRƯỢT KIỂU FADE
$('.topstory-advertise').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade:true,
    cssEase: 'linear'
  });
// SỬ  DỤNG LIBRARY SLICK JQUERY ĐỂ TẠO CAROUSEL VỚI PREV/NEXT BUTTON CUSTOM
  $('.business__card-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }
          }
    ]
    
  });

// THAY ĐỔI SRC TỚI VIDEO HIỆN ĐƯỢC CLICK VÀ UPDATE TITLES VIDEO
let videoList = document.querySelectorAll('.list') 

videoList.forEach(vid => {
    vid.onclick = () => {
        let src = vid.querySelector('.main-video-s').src
        let title = vid.querySelector('.main-video-title-s').innerHTML
        document.querySelector('.main-video').src = src
        document.querySelector('.main-video').play()
        document.querySelector('.main-video-title').innerHTML = title

    }
})


// SHOW SCROLL UP BUTTON
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher 200vh, add the show-scroll class to a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


// ĐÓNG MỞ MENU TOGGLE
const menuToggle = document.querySelector('.nav__show-all')
const menu = document.querySelector('.nav-wrap-menu')
const closeBtn = document.querySelector('.close-menu')
const menuToggleTop = document.querySelector('.header-menu-top')
console.log(menuToggleTop);

if(menuToggleTop) {
    menuToggleTop.addEventListener('click', () => {
        menu.classList.toggle('open-menu')
    })
}


if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        menu.classList.add('open-menu')
    })
}

if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('open-menu')
    })
}
