//선언부
let num1, num2, result;
num1 = 5; num2 = 10; result = 0;

let num9 = 10
let num99 = 10

//구현부
result = num1 + num2
console.log("더하기: " + result)

result = num2 - num1
console.log("빼기: " + result)

result = num1 * num2
console.log("곱하기: " + result)

result = num2 / num1
console.log("나누기: " + result)

result = num2 % num1
console.log("나머지: " + result)

//------- ++선행, --선행, ++후행, --후행
result = ++num9
console.log(`++선행 결과는 ${result}이고, 변수값은 ${num9}이다`)
result = --num99
console.log(`--선행 결과는 ${result}이고, 변수값은 ${num99}이다`)
result = num9++
console.log(`후행++ 결과는 ${result}이고, 변수값은 ${num9}이다`)
result = num99--
console.log(`후행-- 결과는 ${result}이고, 변수값은 ${num99}이다`)

document.getElementById("result").innerHTML = `<h3>${num1+num2}</h3>`
//출력부