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
- 카테고리 메뉴 클릭시, 1/2/3차 카테고리 Path Parameter로 List 페이지 라우팅
<br />

#### 2. [공통] `<Footer>`
- 기본UI 구현(링크목록 데이터 Mapping)
<br />

#### 3. [공통] `<Login>` 로그인 모달창
- On/Off Store 상태관리 : Header 버튼클릭 외에도, 미로그인 상태로 구매/장바구니 클릭시 로그인 우선 On
- `<LoginModal>` 박스 내, Access(접속) - Find(계정찾기) 모드 제어
- 이메일, 비밀번호 입력시 Value 저장, 초기 Submit 이후 Validation 로직 구현(원본 동일)
- "이메일 저장하기" 체크박스 클릭시, React-cookie 이메일 쿠키저장 및 useEffect 불러오기
- Submit 시, Saga & Axios 서버 post() 요청 : 성공시 alert, 토큰 세션저장 및 페이지 리로드. 실패시 `<form>` 상단 에러문구
<br />

#### 4. `<Register>` 회원가입 페이지
- `<Input>` 입력시 Value 저장, 실시간 Validation 로직 구현(원본 동일)
- `<Input>` 값 존재유무에 따라 다른 Valid Message 표현. Valid False 시, `<Input>` 붉은 테두리
- Submit 시, 입력값 Valid 여부, 필수 체크박스 체크여부 점검 후 디스패치 진행
- 이후, Saga & Axios 서버 post() 요청 : 성공시 메인 페이지 라우팅, 실패시 서버에러 메세지 alert
<br />

#### 5. `<Main>` 메인 페이지
- Routes 초기 진입점 외 UI, 기능 없음
<br />

#### 6. `<List>` 리스트 페이지
- `<ListHeader>` 스크롤에 따른 Sticky 전환, 이후 방향에 따른 Up/Down 트랜스폼
- 좌측 `<ListFilter>` 스크롤에 따른 Sticky 전환. 이후, 우측 `<ListItemWrapper>` 와 스크롤 분리
- Saga & Axios 서버 get() 요청 : 현재 Path Parameter URL 첨부하여 서버 데이터 요청
- `<ListHeader>` 우측 Sort박스 On/Off, 날짜 및 가격순 Sort 기능 구현
- Infinite Scroll 구현 : Scroll 계산하여 바닥 도달시 디스패치, round(횟수) Query String 통한 서버측 데이터 Slicing
- `<ListItem>` Hover 시, 2컬러 이상 아이템 이미지 리스트 표현. 해당 이미지 Hover 시, 메인 이미지 전환
- `<ListItem>` 클릭시, 해당 id값 Detail 페이지 라우팅
- `<ListFilter>` 필터박스 Fold 애니메이션 구현. Color, Brand 필터링 기능 추가(클릭시 필터 디스패치)
<br />

#### 7. `<Detail>` 상세 페이지
- Saga & Axios 서버 get() 요청 : 현재 Path Parameter URL 첨부하여 서버 데이터 요청
- 좌측 `<DetailImages>` 이미지 리스트 GridBox 구현
- 우측 `<DetailInfo>` Store 상태정보 참고하여 UI 표현.
- `<DetailModal>` 각종 버튼 클릭시, 해당 정보 Modal모드로 On
- `<PurchaseSize>` 사이즈 유무, 선택에 따른 `<Button>` UI변경, disabled 처리
- `<PurchaseCount>` 상품개수 카운터 구현(사이즈별 갯수를 최대한도 유동적 변경)
- `<PurchaseButton>` 사이즈 미선택 시 미작동, 로그인 아닌 경우 `<Login>` 모달창 On, 장바구니 회원 조건부 라우팅
- `<InfoFoldable>` 3개 Fold Box 추가정보 포함. 1개 Box만 Open, 나머지는 Close(원본과 동일)
<br />

#### 8. `<Cart>` 장바구니 페이지
- 장바구니 상품 유무에 따른 2가지 UI 표현
- `<Detail>` 페이지 장바구니 클릭시, 데이터가 저장된 Store 상태로 장바구니 목록 표현
- 우측 `<CartAside>` 에서 총 금액계산, "주문하기" 버튼 클릭시 "/purchase" 라우팅
- `<Cart>` 리스트 상단 "전체삭제" 클릭시, Cart 목록 전부 삭제
- `<CartItem>` Delete 기능구현 : "X" 버튼 클릭시, 해당 id, size에 맞는 아이템 Cart 목록 제거
- `<CartItem>` Update Modal : "옵션변경" Modal 클릭시, size/count 변경 가능한 모달창 On
- Modal On 시, 해당 아이템 id값으로 서버 패치. 이미지, 사이즈 및 갯수 등 정보 
<br />

#### 9. Redux Store 중앙상태 관리
- Action : 페이지, 컴포넌트 별 Action Type 변수, 생성자 함수 구현 및 export
- Reducer : initialState 선언, Action Type에 따른 Reducer 로직구현, RootReducer 랩핑
- Saga : Login, Register, itemList, Detail 비동기 패치 위한 Saga Generator 함수 구현, RootSaga 맵핑
- Selector.js : itemListSaga에서, itemListReducer path, query 상태값 참고를 위한 Store 상태 Selector
- Store.js : Redux 중앙 상태관리 Store. RootReducer, RootSaga, devTools, 미들웨어 병합
