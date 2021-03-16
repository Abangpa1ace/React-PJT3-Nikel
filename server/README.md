## Nikel: Back-End
### Structure
```
server
├── app.js                  - Express 서버 진입지점, 미들웨어 관리 
├── bin/   
│   └── www                 - 서버실행 스크립트(HTTP모듈 - Express모듈 연동)
│
├── database/               - 간이 Database(JS파일)
│   ├── itemsData.js        - 상품정보 Database(400개 신발 데이터 랜덤생성)
│   └── usersData.js        - 회원정보 Database
│
├── node_modules/           - Express-generator 모듈 번들
│
├── public/                 - 리소스 파일저장(미사용)               
│
├── routes/              
│   ├── items.js            - /items 경로 상품 리스트 라우터(round 쿼리로 데이터 Slicing)
│   ├── detail.js           - /rests 경로 상품 상세정보 라우터(id값)
│   └── users.js            - /users 경로 로그인/회원가입 라우터 (Validation 포함)
│
├── views/                  
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore



```
<br />

### OutCome
#### 1. 서버
- app.js 진입파일 설정, Express-generator 패키지 활용
- 각 Router 불러오기(require), app.use() Root Path 연동
- 미들웨어 연동(cookie-parser, cors 등)
<br />

#### 2. 미들웨어 
- cors : 클라이언트(포트 3000), 서버(포트 5000) 통신을 위한 미들웨어
- bcrypt : 비밀번호 암호화 해싱(hashSync), 비교(compareSync) 위한 미들웨어
- jsonwebtoken : 회원 로그인 시, Response 토큰동봉을 위한 미들웨어
<br />

#### 3. 라우터(routes/)
- /users/register : 회원가입 Request Body 검사(빈값 여부, 정규식, DB동일 이메일 여부), 양호시 DB저장 및 SUCCESS / 이상시 에러(412) 반환
- /users/login : 로그인 Request Body 검사(빈값 여부, DB존재 계정 및 비밀번호 일치여부), 양호시 SUCCESS 토큰 / 이상시 에러(413) 반환
- /items : 상품 리스트 Response. Semantic URL(카테고리), Query String(필터), round(slice 인덱스) 통한 DB데이터 가공 후 배열 반환
- /detail : 상품 상세정보 Response. Semantic URL(id) 일치하는 상품 데이터 객체 반환
<br />

#### 4. 데이터베이스(database/)
- usersData.js : 회원가입 시 정보저장(id: new Date(), 비밀번호 해시), 회원가입 이메일 존재여부 및 로그인 정보비교 활용
- itemssData.js : 상품 400개 정보 배열저장 (일부 정보값 랜덤생성, 해당 로직포함)
