let r3 = document.querySelector("#result3")
let r3_2 = document.querySelector("#result3_2")
// var walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요", "0")

let walkAmount = 10000 //가데이터
r3.innerHTML = `가데이터: 10000 <br>`
if (walkAmount >= 10000) {
    //사용자의 긍정 응답에 반응
    // flag = true
    r3.innerHTML += "매우 좋은 습관이네요~"
}
//사용자의 부정 응답에 반응
else {
    // flag = false
    r3.innerHTML += "걷는 습관은 건강에 좋아요. 만보걷기 추천~"
}

//삼항 연산자
//추천(간단한 상황):
// walkAmount >= 10000 ? flag = true : flag = false
//비추(복잡한 로직):
//walkAmount >= 10000 ? r3.innerHTML = `매우 좋은 습관이네요~ <hr>` : r3.innerHTML = `걷는 습관은 건강에 좋아요. 만보걷기 추천! <hr>`

//----------------------------------------------------------
//***if ~ else if문은 위에서부터 순차적으로 내려오면서 모두 비교한다.
let walkAmount2 = 800 //가데이터

r3_2.innerHTML = `가데이터: 800 <br>`
if (walkAmount2 >= 10000) {
    //사용자의 긍정1 응답에 반응
    r3_2.innerHTML += "매우 좋은 습관이네요~"
}
//사용자의 긍정2 응답에 반응
else if (walkAmount >= 8000 && walkAmount < 10000) {
    r3_2.innerHTML += "하루 8000보 이상, 만보 걷기 추천!!"
}
//사용자의 긍정3 응답에 반응
else if (walkAmount >= 3000 && walkAmount < 8000) {
    r3_2.innerHTML += "하루 3000보 이상, 만보 걷기 추천!!"
}
//사용자의 긍정4 응답에 반응
else if (walkAmount >= 1000 && walkAmount < 3000) {
    r3_2.innerHTML += "하루 1000보 이상, 만보 걷기 추천!!"
}
//사용자의 나머지 부정 답변 반응
else {
    r3_2.innerHTML += "1000보 이하.. 매우 안좋은 습관이네요ㅠㅠ"
}

//-------------------------------------------------------------
//***switch문은 조건에 맞는 case로 바로 분기한다.
let r3_3 = document.querySelector("#result3_3")
r3_3.innerHTML = "switch url 연결 주석에 걸어둠"
r3_3.innerHTML = "가데이터: 구글 <br>"
let site = "구글"
switch (site) {
    case "구글":
        url = "www.google.com"
        r3_3.innerHTML += url
        break;
    case "다음":
        url = "www.daum.net"
        r3_3.innerHTML += url
        break;
    case "네이버":
        url = "www.naver.com"
        r3_3.innerHTML += url
        break;
    case "네이트":
        url = "www.nate.com"
        r3_3.innerHTML += url
        break;
    default:
        alert("보기에 없는 사이트 입니다.")
        r3_3.innerHTML += url
        break;
}
// if (url) location.href = "http://" + url;
//-------------------------------------------------------------
let r3_4 = document.querySelector("#result3_4")
r3_4.innerHTML = "i=1, i가 10이하인 동안 i++ & sum <br>"

let i = 1
let sum = 0 
while (i <= 10) {
    i++
    //종료환경*필수*
    console.log(i)

    sum += i
    console.log(sum)
}
r3_4.innerHTML += `i변수값은 ${i} <br>`
r3_4.innerHTML += `sum합계값은 ${sum}`