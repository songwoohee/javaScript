/* 주민 등록 번호를 입력 받아 성별, 나이, 출력 하기
- 문자열을 자르는 substring사용
- 날짜 계산을 위해 Date 내장 객체 사용 (new Date())
- 주민등록번호 입력 길이 체크
- 하이픈 포함 여부 체크 (indexOf)
- HTML + CSS로 이쁘게 출력 하기
[조건]
길이 체크, 하이픈이 있는지 체크，　누락시　재　입력　요구
성별 확인 123456-1234567
현재 년도 - 태어난 년도 = 나이
 */


function jumin() {
  while(true) {
  const num = prompt("주민등록번호 입력 : ", "");

  if (num === null) {
    console.log("입력이 취소되었습니다.");
    break;
  }
  
  if(num.length !== 14 || num.indexOf('-') !== 6) {
    console.log("주민등록번호를 정확하게 다시 입력 하세요.");
  } else {
  const juminArray = num.split('-');
  const birthYear = parseInt(juminArray[0].substr(0,2));
  const currentYear = new Date().getFullYear() ;
  const age = currentYear - birthYear + 1;
  
  const genderDisit = parseInt(juminArray[1].charAt(0));
  const gender = genderDisit % 2 === 1 ? "남성" : "여성"

  console.log(`성별 : ${gender}, 나이 : ${age}세`)
  break;
     }
  }
}
jumin();

