/* Include : Header // Footer */
document.addEventListener('DOMContentLoaded', () => {
    /* header 파일 불러옴 */
    fetch('/include/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-include').innerHTML = data;
        /* ==================================================== */
        /* 헤더가 화면에 나타난 '이후'에 실행되는 코드 */
        /* ==================================================== */
        /* 1. Header - Searchbox */
        const searchEl = document.querySelector('.search');
        const inputEl = searchEl.querySelector('input');
        // .search를 클릭했을때 포커스 실행
        searchEl.addEventListener('click', () => {
            inputEl.focus();
        });
        // .search안 input focus 상태
        inputEl.addEventListener('focus', () => {
            searchEl.classList.add('focused');
            inputEl.setAttribute('placeholder', '통합검색');
        });
        // .search안 input focse 해제 상태
        inputEl.addEventListener('blur', () => {
            searchEl.classList.remove('focused');
            inputEl.setAttribute('placeholder', '');
        });

        /* 2. Header - badge : right banner */
        const badgeEl = document.querySelector('header .badges');
        // scroll시 throttle 이벤트 발생  
        // Lodash에서 제공 : _.throttle(함수, 시간) = scroll, mouseMove, resize
        window.addEventListener('scroll', _.throttle( () => {
            console.log(window.scrollY);
            if (window.scrollY > 500) {
                // badge Hide
                /* badgeEl.style.display = 'none'; */
                // gsap.to(요소, 지속시간, {옵션});
                gsap.to(badgeEl, 0.6, {
                    opacity: 0,
                    display: 'none',
                    x: 100
                });
            } else {
                // badge show
                /* badgeEl.style.display = 'block'; */
                gsap.to(badgeEl, 0.6, {
                    opacity: 1,
                    display: 'block',
                    x: 0
                });
            }
        }, 300));
    });

    /* footer 파일 불러옴 */
    fetch('/include/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-include').innerHTML = data;
        /* ==================================================== */
        /* 푸터가 화면에 나타난 '이후'에 실행되는 코드 */
        /* ==================================================== */
        /* 1. Footer : Awards */
        const awardSwiper = new Swiper('.awards .swiper', {
            // direction: 'horizontal',
            slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
            spaceBetween: 30, // 슬라이드 사이 여백
            loop: true, // 썸네일 반복되게 
            autoplay: true, // 자동재생
            navigation: {
                prevEl: ".awards .swiper-prev",
                nextEl: ".awards .swiper-next"
            }
        });

        /* 2. This Year */
        const thisYear = document.querySelector('.this-year');
        //thisYear.textContent = new Date().getFullYear();
        thisYear.textContent = new Date().getFullYear();

        /* 3. Scroll to Top */
        const toTopEl = document.querySelector('#to-top');
        toTopEl.addEventListener('click', () => {
            gsap.to(window, 0.7, {
                scrollTo: 0,
            });
        });
        window.addEventListener('scroll', _.throttle( ()=> { 
            if (window.scrollY > 500) {
                gsap.to (toTopEl, 0.4, {
                    x: 0
                });
            } else {
                gsap.to (toTopEl, 0.4, {
                    x: 100
                });
            }
        }));
    });
});