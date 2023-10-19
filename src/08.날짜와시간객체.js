/* 날짜와 시간을 다루는 Date 객체 */
const date = new Date();
console.log(date);

/* 이렇게 사용하면 헷갈림 */
const date1 = new Date(2022, 11, 27);
console.log(date1);  // 출력 2022-12-26T15:00:00.000Z
/* 아래와 같이 사용해야함 */
const date3 = new Date("2022-12-25");
console.log(date3);  // 출력 2022-12-25T00:00:00.000Z

const date4 = new Date("2022/12/25/18:00:00");
console.log(date4);  // 출력 2022-12-25T09:00:00.000Z

const myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력 2023
console.log(myDate.getMonth()+1); // 현재 월 출력 10  (항상 0부터 시작함)
console.log(myDate.getDate()); // 현재 날짜 출력 19
console.log(myDate.getDay()); // 현재 요일 출력 4
console.log(myDate.getHours()); // 현재 시간 출력 9
console.log(myDate.getMinutes()); // 현재 분 출력 49
console.log(myDate.getSeconds()); // 현재 초 출력 2
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력 1697676542886

