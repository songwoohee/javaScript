/* 객체란? 자바스크립트에서 원시타입을 제외한 모든 값이 객체
   1. 속성과 값이 쌍으로 구성
   2. 객체는 객체리터럴을 사용하여 만들며 속성(property)과 값(value)의 쌍으로 구성
   3. 자바스크립트에서 객체를 만드는 방법은 객체리터럴을 사용하는 방법과 클래스를 사용하는 방법이 있음.
   4. 객체 리터럴로 객체를 만드는 것이 간단하고 직관적임 */
  
const person = {
  title : "지구오락실",
  name : "안유진",
  age : 21,
  job : "아이돌",
};

console.log(person);

const person2 = {
  name : {
    firstName : "유진",
    lastName : "안",
  },
  age : 21,
  isAdult : true,
  info : function(){
    return `이름 : ${this.name.lastName} ${this.name.firstName}, 
    나이 : ${this.age}`;
  }
}
console.log(person2.info());
console.log(person2['name']);
console.log(person2['isAdult']);

/* 객체 속성 변경하기  */
person2.name.firstName = "Yugin";
person2.name.lastName = "An";
console.log(person2.info());  
// 출력 > 이름 : An Yugin 값이 바껴서 나온다. (person2라는 주소는 안바뀌지만 안에 있는 속성(property)은 바껴서 출력됨.)

/* 객체 속성 동적으로 추가하기 */
const carInfo = {};  // 빈 객체 생성 후, 아래 정보들 추가 
carInfo.name = "제네시스GV80쿠페";
carInfo.year = "2023/10/18";
carInfo.maxSpeed = "235km";

console.log(carInfo);
// 출력 : { name: '제네시스GV80쿠페', yaer: '2023/10/18', maxSpeed: '235km' }

/* 객체리터럴 동적으로 삭제하기 */
delete carInfo.year;
console.log(carInfo);
/* 객체 메소드 : 객체 내부에서 동작하는 함수. 즉, property에 저장된 값의 타입이 함수를 의미함  */
let person3 = {
  name: 'John',
  age: 30,
  sayHello: function() { 
    console.log(`Hello, my name is ${this.name}.`);
  }
};
person3.sayHello(); // 출력: 'Hello, my name is John.'

/* 생성자로 객체 생성하기, 함수 이름이지만 객체를 생성하여 사용하기 때문에 첫자가 대문자 */
function Person(name, age, addr, job) {
  this.name = name;
  this.age = age;
  this.addr = addr;
  this.job = job;
}
const person11 = new Person("안유진", 21, "서울시 강남구", "아이돌");
const person22 = new Person("장원영", 20, "서울시 서초구", "아이돌");
console.log(person11);
console.log(person22);