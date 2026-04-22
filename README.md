# ☕ Starbucks Coffee Korea Clone
스타벅스 코리아 공식 웹사이트의 메인 페이지와 로그인 페이지를 클론 코딩한 프로젝트입니다. 
각 섹션별로 UI를 구성하고 SCSS와 JavaScript를 활용하여 역동적인 애니메이션 효과를 구현했습니다.

## 🔗 Live Demo
> **배포 주소:**   
> https://gorgeous-dango-fc3641.netlify.app/

## 🛠 Tech Stack
- **HTML5** : 구조적인 웹 페이지 설계
- **SCSS** : 가독성 높은 스타일링 및 변수/믹스인 활용
- **JavaScript** : 인터랙티브한 UI 및 애니메이션 제어
- **Libraries**:
  - **GSAP & ScrollToPlugin** : 스크롤 애니메이션 구현
  - **Swiper.js** : 프로모션 및 공지사항 슬라이드 구현
  - **ScrollMagic** : 스크롤 위치에 따른 요소 등장 효과(Scroll Spy)
  - **Lodash** : 스크롤 이벤트 성능 최적화(Throttle)

## 🏗 Project Structure
효율적인 유지보수를 위해 공통 요소와 페이지별 코드를 분리하여 작업했습니다.

### 1. Component Include
중복되는 HTML 코드를 최소화하기 위해 공통 영역을 별도로 관리합니다.
- `header-include`: 상단 네비게이션 및 메뉴 영역
- `footer-include`: 하단 정보 및 링크 영역

### 2. 주요 구현 섹션
- **Visual** : 페이지 상단 메인 비주얼 요소들의 페이드 인 애니메이션
- **Notice & Promotion** : Swiper를 이용한 다중 슬라이더 및 토글 버튼 제어
- **Youtube** : 배경 영상 재생 및 부유하는(Floating) 아이콘 애니메이션
- **Scroll Spy** : 각 섹션이 화면에 나타날 때 애니메이션 실행 (Season Product, Reserve, Find Store 등)
- **Sign In** : 정적 로그인 페이지 구성

## ✍️ 핵심 구현 내용
- **SCSS 모듈화** : 각 섹션별로 스타일 파일을 관리하여 가독성을 높였습니다.
- **JavaScript 애니메이션** : 
  - `gsap`을 활용해 요소별로 지연 시간(`delay`)을 주어 순차적으로 나타나는 효과를 주었습니다.
  - 유튜브 API를 연동하여 동적인 배경을 구현했습니다.
- **웹 표준 & SEO** : Open Graph 및 Favicon 설정을 통해 검색 엔진 최적화와 공유 시 미리보기 이미지를 적용했습니다.

## 📁 폴더 구성
```text
project-root/
├── index.html           # 메인 페이지
├── images/              # 프로젝트 사용 이미지
├── css/
│   └── main.css         # SCSS 빌드 결과물
├── js/
│   ├── main.js          # 메인 스크립트
│   └── youtube.js       # 유튜브 API 제어
└── include/
│   ├── header.html      # 헤더 인크루드 파일
└── └── footer.html      # 푸터 인크루드 파일
