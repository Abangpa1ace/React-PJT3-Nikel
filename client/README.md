## Nikel: Front-End
### Structure
```
client
├── node_modules                  - CRA 모듈
│
├── public/                   
│   ├── images/                   - mock-data(임의 이미지)
│   └── index.html                - SPA HTML 페이지
│
└── src/                      
    ├── index.js                  - index.html ReactDOM 렌더링
    ├── Routes.js                 - Root Component, React 라우터
    │ 
    ├── Components/               - 공통, 공용 컴포넌트
    │   ├── Common/
    │   │   ├── RecommendCarousel/- Detail, Cart 페이지 추천 리스트 Carousel
    │   │   ├── SocialButton/     - 페이스북, 카카오 소셜API 커스텀 버튼
    │   │   └── StyledCommon.js   - `<button>`, `<input>` 커스텀 컴포넌트
    │   │
    │   ├── Footer/               
    │   │   ├── components/       - 구성 컴포넌트(FooterLinks, FooterRights, FooterInfo)
    │   │   ├── index.jsx         - Footer 컨테이너
    │   │   └── FooterData.js     - Footer 맵핑리스트 데이터
    │   │
    │   ├── Header/               
    │   │   ├── components/       - 구성 컴포넌트(HeaderUserMenu, HeaderNavbar) 및 SearchModal
    │   │   ├── index.jsx         - Header 컨테이너
    │   │   └── HeaderData.js     - Header 맵핑리스트 데이터
    │   │
    │   └── Login/               
    │       ├── components/       - 구성 컴포넌트 (LoginModal, LoginAccess)
    │       └── index.jsx         - Login 모달창 컨테이너
    │ 
    ├── Data/                     
    │   ├── config.js             - 서버 API URL, 약관 Mock Data 포함
    │   └── data.js               - mock-data(JS 숙소리스트)
    │ 
    ├── Hooks/                     
    │   └── useScroll.jsx         - scroll up/down 계산 커스텀 훅
    │
    ├── Pages/
    │   ├── Cart/                 - Cart 장바구니 페이지
    │   │   ├── components/       - 구성 컴포넌트 (CartList, CartAside, CartModal)
    │   │   └── index.jsx         - Cart 페이지 컨테이너
    │   │
    │   ├── Detail/               - Detail 상세 페이지
    │   │   ├── components/       - 구성 컴포넌트 (DetailImages, DetailInfo, DetailModal)
    │   │   └── index.jsx         - Detail 페이지 컨테이너
    │   │
    │   ├── List/                 - List 상품목록 페이지
    │   │   ├── components/       - 구성 컴포넌트 (ListHeader, ListFilter, ListItemWrapper)
    │   │   ├── index.jsx         - List 페이지 컨테이너
    │   │   └── ListData.js       - List 페이지 필터박스 데이터
    │   │
    │   ├── Main/                 - Main 메인 페이지
    │   │   └── index.jsx         - 내용없음(Routes 초기 포인트)
    │   │
    │   └── Register/             - Register 회원가입 페이지
    │       ├── components/       - 구성 컴포넌트 (RegisterAbove, RegisterForm)
    │       └── index.jsx         - Register 페이지 컨테이너
    │
    ├── Store/                     
    │   ├── Action/               - Action Type 변수, 생성자 함수
    │   ├── Reducer/              - 초기 State, Reducer함수 및 RootReducer
    │   ├── Saga/                 - 비동기 fetch Saga함수 및 RootSaga
    │   ├── Selector.js           - itemListSaga Store 상태참고를 위한 상태 Selector
    │   └── Store.js              - RootReducer, RootSaga, 미들웨어 병합 및 Store 전달
    │     
    ├── Styles/                     
    │   ├── reset.js              - createGlobalStyle 초기화 속성
    │   └── theme.js              - theme(너비, 색깔, z-index) 및 FlexBox 공용속성
    │
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── .gitignore

```
<br />

### OutCome
#### 1. [공통] `<Header>`
- 스크롤에 따른 Sticky 전환, 이후 방향에 따른 Up/Down 트랜스폼
- "로그인" 클릭시 모달창 On, "회원가입" 클릭시 페이지 이동 연동
- `<SearchModal>` 검색 모달창 구현, 우측 검색바 클릭시 모달창 On 연동
- 장바구니 버튼 클릭시 페이지 이동, 장바구니 상품 갯수 아이콘 내 표현 연동
- `<HeaderNavbar>` 메뉴 Hover 시 카테고리 메뉴 표현, Mouse Over+Out 애니메이션
<br />

#### 2. [공통] `<Footer>`
- 기본UI 구현(링크목록 데이터 Mapping)
<br />

#### 3. [공통] `<Login>` 로그인 모달창
- On/Off Store 상태관리 : Header 버튼클릭 외에도, 미로그인 상태로 구매/장바구니 클릭시 로그인 우선 On
- `<LoginModal>` 박스 내, Access(접속) - Find(계정찾기) 모드 제어
- 이메일, 비밀번호 입력시 Value 저장, 초기 Submit 이후 Validation 로직 구현(원본 동일)
- "이메일 저장하기" 체크박스 클릭시, React-cookie 이메일 쿠키저장 및 useEffect 불러오기
- Redux-Saga, Axios 서버 post() 요청 : 성공시 alert, 토큰 세션저장 및 페이지 리로드. 실패시 서버에러 내용 저장
<br />

#### 4. `<Register>` 회원가입 페이지
- 이메일, 비밀번호, 비밀번호 재입력, 이름, 핸드폰 입력시 Value 저장, 실시간 Validation 로직 구현(원본 동일)
- `<Input>` 값 존재유무에 따라 다른 Valid Message 표현. Valid False 시, `<Input>` 붉은 테두리


