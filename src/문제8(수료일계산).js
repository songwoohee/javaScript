/* 날짜 간격 계산하기 
- 24(시간) X 60(분) X 60(초) X 1000(밀리초)
- remainTime = parseInt(remainTime/(1000*60*60*24));
- 현재 시간 기준으로 수료일 계산하기
 */

const dDay = new Date("2024-02-21");
const now =  new Date();

const toNow = now.getTime();
const toDay = dDay.getTime();
const remainTime = toDay - toNow;

const calcDay = Math.round(remainTime / (1000 * 60 * 60 * 24));
console.log(calcDay);

document.querySelector('#result').innerHTML = calcDay;