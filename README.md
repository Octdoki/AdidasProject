  ![screencapture-localhost-5173-202](https://github.com/Octdoki/Adidas/assets/76845650/75c45a99-a534-4c91-ac1c-41e326840b1b)

 ## AdidasMall

  아디다스 상품을 판매하는 쇼핑몰입니다

   demo Link : https://octdoki.github.io/Adidas/dist/
   

   ## Description

  ### 디렉터리 구조
          📦src
          ┣ 📂assets
          ┣ 📂hooks
          ┃ ┣ 📜useAxios.jsx
          ┃ ┣ 📜useInput.jsx
          ┃ ┗ 📜설명.txt
          ┣ 📂pages
          ┃ ┣ 📂about
          ┃ ┃ ┣ 📜About.jsx
          ┃ ┃ ┗ 📜AboutStyle.js
          ┃ ┣ 📂cart
          ┃ ┃ ┣ 📜Cart.css
          ┃ ┃ ┣ 📜Cart.jsx
          ┃ ┃ ┗ 📜ProjectStyle.js
          ┃ ┣ 📂customer
          ┃ ┃ ┣ 📜Customer.jsx
          ┃ ┃ ┗ 📜CustomerStyle.js
          ┃ ┣ 📂login
          ┃ ┃ ┣ 📜Join.jsx
          ┃ ┃ ┣ 📜Login.jsx
          ┃ ┃ ┣ 📜LoginStyle.js
          ┃ ┃ ┗ 📜Logout.jsx
          ┃ ┣ 📂main
          ┃ ┃ ┣ 📜Main.jsx
          ┃ ┃ ┗ 📜MainStyle.js
          ┃ ┣ 📂notfile
          ┃ ┃ ┣ 📜NotfileStyle.js
          ┃ ┃ ┗ 📜Notfiles.jsx
          ┃ ┣ 📂notice
          ┃ ┃ ┣ 📜Notice.jsx
          ┃ ┃ ┗ 📜NoticeStyle.js
          ┃ ┗ 📂product
          ┃ ┃ ┣ 📜Product.jsx
          ┃ ┃ ┣ 📜ProductSearch.jsx
          ┃ ┃ ┗ 📜ProjectStyle.js
          ┣ 📂store
          ┃ ┣ 📂modules
          ┃ ┃ ┣ 📜authSlice.jsx
          ┃ ┃ ┣ 📜cartSlice.jsx
          ┃ ┃ ┣ 📜customerSlice.jsx
          ┃ ┃ ┣ 📜noticeSlice.jsx
          ┃ ┃ ┗ 📜paginationSlice.jsx
          ┃ ┗ 📜index.jsx
          ┣ 📂styled
          ┃ ┣ 📜GlobalStyle.js
          ┃ ┣ 📜Style.js
          ┃ ┗ 📜swiperStyle.js
          ┣ 📜.DS_Store
          ┣ 📜App.jsx
          ┣ 📜index.css
          ┗ 📜main.jsx




 
 
          

   
      
  #### Enviorment
  * 1.Git
  * 2.NodeJS / Yarn

  #### Technologies
  * react
  * react-dom
  * react-router-dom
  * redux-toolkit

  ## 주요기능


 ### 1) 메인

* swiper slide 배너 
* 리뉴얼 컨텐츠
  
<img src="./images/../public/images/main.gif">

### 2) 브랜드소개

* 리뉴얼 컨텐츠
  

### 3) 상품 리스트

* 상품 정렬
* 상품 정렬 초기화
* 상품 리스트 검색 기능 
* 주문하기 클릭 시 장바구니 담기
  
<img src="./images/../public/images/product.gif">


### 4) 장바구니

* 상품 증감 수량과 수량에 따른 각각의 가격 계산
* 체크박스 각각 클릭 시 전체 체크박스는 해제 (예정)
* 체크박스 클릭 시 수량, 총합 (예정)
* 선택상품 삭제
* 장바구니 전체 비우기
* 쇼핑하러가기 버튼 클릭 시 상품리스트로 이동
  
<img src="./images/../public/images/cart.gif">


### 5) Notice 게시판

* 페이지네이션
* 게시물 상세내용 확인가능, 다시 목록으로 이동
  
<img src="./images/../public/images/notice.gif">


### 6) Customer 게시판 

* 글 작성 기능
* 글 수정 기능
* 글 삭제기능
* 페이지네이션
* 목록가기
* 글 작성 취소

<img src="./images/../public/images/customer.gif">


### 7) 회원가입 /  로그인 / 로그아웃

* 회원가입 시 로그인 가능
* 로컬스토리지 연동(예정)

<img src="./images/../public/images/login.gif">



