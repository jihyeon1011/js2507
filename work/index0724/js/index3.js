// 상수는 항상 같은수이며, 선언과 동시에 초기값을 설정한다.
const PI = 3.14; 

// 변수 선언부
let radius;
let area;

// 변수 초기화부
radius = 0;
area = 0;

/*
변수 선언+초기화부
let radius = 0;
let area = 0;
*/

// 변수 구현부
radius = prompt("반지름을 입력하세요.");
area = PI * radius * radius;

// 출력부
console.log(area); /*원의 넓이를 알림 창에 출력*/