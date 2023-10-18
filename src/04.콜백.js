/* 콜백(callback) : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행 될 때 호출 되는 함수
   콜백 함수는 비동기적인 작업을 처리할 때 많이 사용 */

function cry() {
  console.log("cry");
}
function sing() {
  console.log("sing");
}
function dance() {
  console.log("dance");
}
/* 일반 함수로 호출 하기 */
function checkMood(mood){
  if(mood === "good") sing();
  else cry();
}
// checkMood("sad");

/* 콜백 함수 
### 비동기적 테크닉을 사용하는 경우
1. 사용자의 이벤트 처리
2. 네트워크 응답 처리
3. 파일을 읽고 쓰는 동작
4. 의도적으로 시간 지연이 필요한 기능 */

// function checkMoodCallback(mood, goodCall, badCall) {
//   if(mood === "good")goodCall();
//   else badCall();
// }
// checkMoodCallback("good", dance, cry);

/* 타이머 설정과 Callback */
// function buyTobe(item, price, quantity, callback) {
//   console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
//   setTimeout(function() {
//     console.log("계산이 필요 합니다.");
//     let total = price * quantity;
//     callback(total);
//   }, 2000)
// }
// function pay(n) {
//   console.log("지불할 금액은 : " + n + " 원 입니다.");
// }

// buyTobe("맥북에어15(스트라이트)", 1300000, 2, pay);

/* 클로저 : 함수가 해당 함수의 스코프 외부에 있는 변수를 접근 할 수 있는 매커니즘 */
function makeCounter() {
  let count = 100;
  return function() {
    count++;
    console.log(count);
  }
}
const counter = makeCounter();
counter();
counter();
counter();


