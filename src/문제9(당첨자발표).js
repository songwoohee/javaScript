/* 당첨자 발표
- 응모자 수를 입력 받음
- 랜덤 함수를 통해서 당첨자를 생성해 당첨자 발표 하기
*/

const entry = prompt("전체 응모자 수 : ", "");
const winner = Math.floor(Math.random() * entry + 1);
 
document.write(`전체 응모자 수 : ${entry} 명`);
document.write("<br>");
document.write(`당첨자 : ${winner} 번`);


