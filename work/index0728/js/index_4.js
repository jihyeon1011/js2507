var d = document
let num1 = 3; num2 = "3"
let num3 = 4; 
//Boolean타입: 0과 1을 표현하는 2진수의 결과를 준다.
var result = true

// 같니?
result = (num1 == num2)
d.getElementById("result1").innerHTML = `<b>${result}</b>`

//타입도 같니?
result = (num1 === num2)
d.getElementById("result2").innerHTML = `<b>${result}</b>`

//같지 않니?
result = (num1 != num2)
d.getElementById("result3").innerHTML = `<b>${result}</b>`

//타입도 같지 않니?
result = (num1 !== num2)
d.getElementById("result4").innerHTML = `<b>${result}</b>`

//왼쪽이 작니?
result = (num1 < num3)
d.getElementById("result5").innerHTML = `<b>${result}</b>`

//왼쪽이 작거나 같니?
result = (num1 <= num3)
d.getElementById("result6").innerHTML = `<b>${result}</b>`

//오른쪽이 작니?
result = (num1 > num3)
d.getElementById("result7").innerHTML = `<b>${result}</b>`

//오른쪽이 작거나 같니?
result = (num1 >= num3)
d.getElementById("result8").innerHTML = `<b>${result}</b>`