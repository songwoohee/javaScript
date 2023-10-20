/* 정규표현식을 사용하여 문자열 검색, 대체, 추출 등을 수행, 패턴 매칭 
   exec() : 패턴과 일치하는 문자열을 반환, 없으면 null */

// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// // const pattern2 = /가장큰+/;
// const result1 = pattern.exec(targetStr);
// // console.log(result1);
// const result2 = pattern.exec(targetStr);
// console.log(result2);

/* test() :  문자열에 특정 패턴과 일치하는 문자열이 있는지 검색, 있으면 true, 없으면 false */
let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
const pattern = /가장+/g;    // 패턴과 일치하는 문자열이 여러 개인 경우
const result1 = pattern.test(targetStr);
console.log(result1);  // true 
const result2 = pattern.test(targetStr); // 패턴과 일치하는 문자열이 하나도 없는 경우
console.log(result2); // false

const phoneNumber = "010-1234-5678";
const regex = /\d{3}-\d{3,4}-\d{4}/;
const rst = regex.test(phoneNumber);
console.log(rst);