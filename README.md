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
- 파일구조 및 작업내용: https://github.com/Abangpa1ace/React-PJT3-Nikel/blob/main/client/README.md

### Back-End
- 파일구조 및 작업내용: https://github.com/Abangpa1ace/React-PJT3-Nikel/tree/main/server/README.md

## Review
### 1. 3개의 프로젝트
한 번의 팀 프로젝트, 두 번의 개인 프로젝트. 이제는 React 개발에 있어서 나름대로 자신감이 생긴 상태다.

우선, 저번 프로젝트의 불규칙적인 페이스를 보완하고자, **4개의 페이지를 3일씩 Sprint를 설정**하여 진행을 했다.<br />
결과적으로, 2주간 일정한 페이스로 프로젝트를 진행할 수 있었고,<br />
List 페이지는 목표치를 모두 구현하진 못했지만 남은 이틀간 보완을 하며 마무리할 수 있었다.

또한, 프론트앤드 요구스택에서 가장 많이 보였던 **Redux, Redux-Saga를 적극적으로 사용**해본 점에서 매우 뿌듯하다.<br />
Store 설계로 Context API에 비해 깔끔한 중앙상태 관리가 가능했고,<br />
어느정도 익숙해지니 Reducer, Saga 각각의 역할분담이 매우 직관적이라는 장점을 체감했다.<br />
<br />

### 2. 새로 배우게 된 것들
- **styled-components** : props+css 조건부 속성, keyframes 애니메이션 숙달
- **Redux, React-Redux** : Store 중앙상태 및 처리로직(액션) 관리
- **Redux-Saga, Axios** : 서버 비동기 패치로직 분할 관리
- **Authorized & 조건부 라우팅** : token과 withRouter를 통한 구매, 장바구니 페이지 조건부 라우팅
- **Infinite Scroll 구현** : List 페이지 스크롤 완료시 서버 fetch, round 상태를 통한 서버에서 Pagination(Slicing)
- **Custom Hooks 제작** : 2개 헤더 스크롤 up/down 속성구현 위한 useScroll() 스크롤 방향감시 커스텀 훅 제작
- **Express.js Response 에러 반환** : Request Validation false 경우, JSON 아닌 에러(status 및 메세지) 형태로 반환
<br />

### 3. 피드백
1) **Item 데이터 View 완성도** : 카테고리, 필터, 아이템 등 전체구성을 본뒤 Item 데이터 모델링, 뷰 작성을 하지 않아 중간수정 잦았음
2) **Modal창 통합 및 정교함 부족** : Detail, Cart 각 페이지 모달 통합 고민필요, 조건부 렌더링으로 꺼질때 애니메이션 추가고민 필요
3) **Saga 비동기 패치시 로딩상태 추가** : 각 패치에 대한, 혹은 원본과 같이 공통 loading으로 loader 컴포넌트 on/off 적용 고민 필요
4) **컴포넌트 재활용성 향상** : 컴포넌트의 기능적 분리가 아직 미숙. Atomic Structure를 통한 소규모 모듈 재활용도 숙달 필요
5) **Custom Hooks 적극 활용** : input 핸들링, Count 증감, state 변화감지 등 반복적인 로직에 대해선 Custom Hooks 제작경험 필요
6) **Back-End(Server) Database 미적용** : DB툴을 적용하지 않은, JS파일에 임시DB를 구현
<br />

2차에 비해 짧은 기간임에도, 지난 경험을 토대로 새로운 공부를 할 수 있었던 이번 프로젝트였다.<br />
특히, **Redux와 Saga는 이번 기회에 정말 많은 감을 잡은 것 같고, 앞으로 더 많은 Store 패턴을 찾아보면서 구조개선을 고민**해보겠다.

모달창을 여러번 만들면서, 고려해야될게 생각보다 많음을 느꼈다. On/Off 애니메이션부터, 켜졌을 때 백페이지의 스크롤 막기까지.<br />
**모달창에만 대해서도 한 번 별도로 공부하고 미니 프로젝트를 진행**해봐야겠다고 느꼈다.
