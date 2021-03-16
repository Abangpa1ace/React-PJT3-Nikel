# React 3rd Project: Nikel

## About
![2019053110481156049_1559267292](https://user-images.githubusercontent.com/67219914/111315057-5c3a9100-86a5-11eb-9129-c64a9cb7213d.jpeg)
- 개요 : 스포츠 커머스 사이트 Nike(나이키) 클론 프로젝트
- 기간 : 3.1(월) ~ 3.15(월) / 15일간
- 원본 : https://www.nike.com/kr/ko_kr/ (나이키 코리아)
<br />

## Skill Stack
### Front-End
- HTML/CSS/Javascript
- React.js(CRA): Functional Component
- Styled Components
- Redux, React-Redux
- Redux-saga
- Axios
- react-router-dom
- react-icons(아이콘)
- react-cookie

### Back-End
- Node.js
- Express.js(Generator)
- npm Middlewares:bcrypt, jsonwebtoken, cors
<br />

## Outcome
<!-- ![AirTnT_500_5](https://user-images.githubusercontent.com/67219914/109272810-bb4e7800-7854-11eb-87a0-a30a52507371.gif) -->

### Front-End
- 파일구조 및 작업내용: 

### Back-End
- 파일구조 및 작업내용:

## Review
#### 1. 3개의 프로젝트
한 번의 팀 프로젝트, 두 번의 개인 프로젝트. 이제는 React 개발에 있어서 나름대로 자신감이 생긴 상태다.

우선, 저번 프로젝트의 불규칙적인 페이스를 보완하고자, 4개의 페이지를 3일씩 Sprint를 설정하여 진행을 했다.
결과적으로, 2주간 일정한 페이스로 프로젝트를 진행할 수 있었고, List 페이지는 목표치를 모두 구현하진 못했지만 남은 이틀간 보완을 하며 마무리할 수 있었다.

또한, 프론트앤드 요구스택에서 가장 많이 보였던 Redux, Redux-Saga를 적극적으로 사용해본 점에서 매우 뿌듯하다.
Store 설계로 Context API에 비해 깔끔한 중앙상태 관리가 가능했고, 어느정도 익숙해지니 Reducer, Saga의 역할분담이 매우 직관적이라고 느꼈다.
<br />

#### 2. 새로 배우게 된 것들
- styled-components : props+css 조건부 속성, keyframes 애니메이션 숙달
- Redux, React-Redux : Store 중앙상태 및 처리로직(액션) 관리
- Redux-Saga, Axios : 서버 비동기 패치로직 분할 관리
- Infinite Scroll 구현 : List 페이지 스크롤 완료시 서버 fetch, round 상태를 통한 서버에서 Pagination(Slicing)
- Custom Hooks 제작 : `<Navbar>`, `<ListHeader>` 스크롤 up/down 속성구현 위한 useScroll() 스크롤 방향감시 커스텀 훅 제작
- Node.js, Express.js 활용 서버구현, 미들웨어 활용(인증/인가, CORS)
<br />

#### 3. 피드백
