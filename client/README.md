## Nikel: Front-End
### Structure
<!-- ```
client
├── node_modules                  - CRA 모듈
│
├── public/                   
│   ├── data/                     - mock-data(JSON 숙소리스트)
│   ├── images/                   - mock-data(임의 이미지)
│   └── index.html                - SPA HTML 페이지
│
└── src/                      
    ├── index.js                  - index.html ReactDOM 렌더링
    ├── Routes.js                 - Root Component, React 라우터
    │── Context.js                - Context API 중앙 상태관리
    │ 
    ├── Data/                     
    │   ├── config.js             - 서버 URL링크, `<svg>` 정보
    │   └── data.js               - mock-data(JS 숙소리스트)
    │ 
    ├── GlobalComponents/         
    │   ├── Carousel/             - `<Carousel>` 이미지 슬라이더
    │   │
    │   ├── Common/
    │   │   ├── CounterBtn.js     - 인원정보, 숙소정보 박스 +,- 버튼
    │   │   └── StyledCommon.js   - `<Link>`, `<button>`, `<img>`, GridBox 커스텀 컴포넌트
    │   │
    │   ├── Footer/               
    │   │   ├── components/       - Footer 구성 컴포넌트
    │   │   ├── Footer.js         - Footer 컨테이너 컴포넌트
    │   │   └── FooterData.js     - Footer 맵핑리스트 정보
    │   │
    │   ├── Modal/                - `<ModalContainer>` 모달창
    │   │
    │   └── Navbar/               
    │       ├── components/       - Navbar 구성 컴포넌트
    │       ├── SearchBar/        - `<SearchBar>` 검색창 및 구성 컴포넌트
    │       ├── SignModal/        - `<SignModal>` 로그인/회원가입 모달박스 및 구성 컴포넌트
    │       ├── Navbar.js         - Navbar 컨테이너 컴포넌트
    │       └── NavbarData.js     - Navbar 맵핑리스트 정보
    │ 
    ├── Pages/                    
    │   ├── Detail/               - Detail 상세 페이지
    │   │   ├── common/           - 상세 페이지 공통 컴포넌트(이미지 원형박스, 정보박스) 
    │   │   ├── components/       - 구성 컴포넌트 (DetailHeader, DetailInfo, DetailAside, DetailAdditional)
    │   │   ├── Detail.js         - 상세 페이지 컨테이너 컴포넌트
    │   │   └── DetailData.js     - 상세 페이지 맵핑리스트, `<svg>`
    │   │
    │   ├── Home/                 - Home 메인 페이지
    │   │   ├── components/       - 구성 컴포넌트 (CoronaNotice, 이미지 GridBox)
    │   │   ├── Home.js           - 메인 페이지 컨테이너 컴포넌트
    │   │   └── HomeData.js       - 메인 페이지 맵핑이미지
    │   │
    │   └── List/                 - List 숙소목록 페이지
    │       ├── ListMap/          - 우측 지도 및 정보 모달창 컴포넌트
    │       ├── ListRests/        - 좌측 숙소목록, 필터박스, 페이지네이션, 최근숙소 컴포넌트
    │       └── List.js           - 목록 페이지 컨테이너 컴포넌트
    │
    ├── Styles/                     
    │   ├── reset.js              - createGlobalStyle 초기화 속성
    │   └── theme.js              - theme(너비, 색깔, 그림자) 및 FlexBox 공용속성
    │
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── .gitignore

``` -->
<br />

### OutCome
#### 1. [공통] `<Navbar>`
- 
<br />

