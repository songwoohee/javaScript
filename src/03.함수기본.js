/* 함수 선언문 : function 키워드로 생성, 호이스팅에 영향 받음, 호출해야 실행 됨 */
// let test = 10000;
// console.log(sum(10, 20));
// console.log(sum(100, 200));



// function sum(p1, p2) {
//   return test + p1 + p2;
// }

/* 함수표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅 적용 되지 않음, 네이밍함수와 익명의 함수를 만들 수 있음 */
// const gugudan = function(dan) {
//     for(let i = 1; i < 10; i++) {
//       console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }

// gugudan(5);
// gugudan(9);

/* 화살표 함수 : ES6에서 추가된 새로운 함수 선언 방법, 함수 선언식 보다 간결하고 가독성이 좋아 많이 사용 됨 */
// const gugudan = (dan) => {
//   for(let i = 1; i < 10; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
//   }
// }

// gugudan(5);
// gugudan(9);

// const sum = (num1, num2 = 100) => {
//     console.log(num1, num2);
//     return num1 + num2;
// }
// 자바스크립트에서는 매개변수의 수만큼 전달하지 인수를 전달하지 않아도 오류 발생하지 않음
// sum(10);   // 출력 10 undefined

/* 기본값 할당 */
// const sum = (num1, num2 = 100) => {
//   console.log(num1, num2);
//   return num1 + num2;
// }

// console.log(sum(10));

// 생략 가능한거 제외하고 간단하게 식 구현 가능 
// const sum = (num1, num2 = 100) => num1 + num2;
// console.log(sum(10));

/* 스코프란? 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위 */
// let a = 10;   // 전역 스코프
// function sum() {
//   let a = 10;  // 지역스코프이자 블록 스코프, 실행시 오류남, 이유는 메소드 안에서 이용되고 난 후 소멸되기 때문.
//   console.log(`함수 내부 : ${a}`);
// }
// sum();
// console.log(`함수 외부 : ${a}`);

// let a = 10;
// {
//   let b = 20;  // 블록 스코프 :  {}로 구성된 블록문 기준으로 스코프의 유효 범위를 나누는 방식. 블록을 만나면 사라진다. {} 안에서 이용되고 사라져서 외부의 b에 쓰일수가 없다. 
//   console.log(`코드 내부 블록 a : ${a}`);
//   console.log(`코드 내부 블록 b : ${b}`);
// }
// console.log(`코드 외부 블록 a : ${a}`);
// console.log(`코드 외부 블록 b : ${b}`);

/* 참조 우선 순위 */
// let a = 10;
// const b = 20;
// function sum() {
//   let a = 50;
//   const b = 70;
//   console.log(`함수 내부 a : ${a}`);
//   console.log(`함수 내부 b : ${b}`);
// }
// sum();
// console.log(`함수 외부 a : ${a}`);
// console.log(`함수 외부 b : ${b}`);
/* 출력 
함수 내부 a : 50
함수 내부 b : 70
함수 외부 a : 10
함수 외부 b : 20  */

// let a = 10;
// let b = 20;
// {
//   let a = 30;
//   let b = 40;
//   console.log(`함수 내부 a : ${a}`);
//   console.log(`함수 내부 b : ${b}`);
// }

/* 즉시 실행 함수 : 함수를 정의하자마자 바로 실행되는 함수  */

(function () {
  init();
})();
function init() {
  console.log("초기화 루틴을 수행 합니다.");
  let defaultUrl = "127.0.0.1";
  let defaultPort = "3030";

  for(let i = 0; i < 100; i++) {
    console.log(i);
  }
}