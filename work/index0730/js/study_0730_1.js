let myDate = new Date()
let myDay = myDate.getDay()
let text = ""
//------------test------------

//myDay=4

//------------test------------


if(myDay === 1){
    text = "월요일, 새로운 한 주가 시작됐어요! 힘내세요!"
}else if(myDay === 2){
    text = "화요일도 화이팅! 조금만 더 달려봐요."
}else if(myDay === 3){
    text = "수요일! 주 중간 점검, 잘 하고 있나요?"    
}else if(myDay === 4){
    text = "목요일입니다! 금요일이 코앞이에요."  
}else if(myDay === 5){
    text = "목요일입니다! 금요일이 코앞이에요."  
}else{
    text = "주말이에요! 푹 쉬면서 재충전하세요."
}

document.getElementById("result").innerHTML = `<h1>${text}</h1>`