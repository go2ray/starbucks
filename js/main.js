/* Visual - NodeList Animation : fade in */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach( (fadeInEl, index) => {
    // gsap.to(요소, 지속시간, {옵션});
    gsap.to(fadeInEl, 1, {
        delay: (index + 1) * 0.7,  // 0.7, 1.4, 2.1, 2.8
        opacity: 1
    });
});

/* Notice : Swiper */
    // new Swiper(선택자, {옵션})
const noticeSwiper = new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: true
});
    // 공지사항 마우스 호버 제어
const noticeSwiperEl = document.querySelector('.notice-line .swiper');
noticeSwiperEl.addEventListener('mouseenter', () => {
    noticeSwiper.autoplay.stop();
});
noticeSwiperEl.addEventListener('mouseleave', () => {
    noticeSwiper.autoplay.start();
});

/* Promotion : Banner Swiper */
const promotionSwiper = new Swiper('.promotion .swiper', {
    // direction: 'horizontal',
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, // 썸네일 반복되게 
    autoplay: { // 무한 재생
        delay: 3000
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next"
    }
});
    // toggle-promotion 동작 제어
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');
let isHidepromotion = false;
promotionToggleBtn.addEventListener('click', ()=> {
    // switch 역할 : false = true
    isHidepromotion = !isHidepromotion
    if (isHidepromotion) {
        // false, 숨김처리
        promotionEl.classList.add('hide');
        promotionToggleIcon.textContent = 'arrow_circle_down';
    } else {
        // true, 보임처리
        promotionEl.classList.remove('hide');
        promotionToggleIcon.textContent = 'arrow_circle_up';
    }
});

/* Youtobe Floating Object */
    // 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject (selector, delay, size) {
    // gsap.to (요소, 시간, 옵션);
    gsap.to (selector, random(1.5, 2.5),  
        {  
            y: size,  // 위아래로 얼마나 이동할지
            repeat: -1,  // 무한 반복
            yoyo: true,  // 갔다가 다시 되돌아오기
            ease: Power1.easeInOut,  // 부드럽게 시작해서 부드럽게 끝남
            delay: random(0, delay)  // 시작하기 전 잠깐 기다리는 시간
        }
    );
}
floatingObject ('.floating1', 1, 15);
floatingObject ('.floating2', 0.5, 15);
floatingObject ('.floating3', 1.5, 20);

/* Section : Scroll Magic */
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach ( (spyEl) => {
    // Scene() : 화면스크롤하면서 제어하려는 섹션을 감시함
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: 0.8  // 감시하는 요소가 뷰포트에 걸리는 위치
            // duration: 500  // 500px 만큼 스크롤 내림
        })
        .setClassToggle(spyEl, 'show')
        // .setPin('#product') // 이미지를 고정시킴 (#붙이기)
        .addTo(new ScrollMagic.Controller()); 
});