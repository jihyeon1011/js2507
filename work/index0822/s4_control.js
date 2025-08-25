let r4 = document.querySelector("#result4")
r4.innerHTML = "<b> console 주석처리함<br><br>"
r4.innerHTML += "const A = new Promise((resolve,reject) => {})<br>"
r4.innerHTML += "setTimeout(() => {구현}, 초 경과(1000:1초))<br>"
r4.innerHTML += "A. then((결과) => {성공값}) / catch((결과) => {실패값})<br>"
r4.innerHTML += "성공도 실패도 아닐때 PromiseState: pending<br><br>"
r4.innerHTML += "<b> console 주석처리함<br><br>"
r4.innerHTML += "const 약속배려함수 = async () => {try{const result = await A(); catch{}}<br>"
r4.innerHTML += "약속배려함수();<br><br>"
r4.innerHTML += "<b> console 확인가능<br><br>"
r4.innerHTML += "const API_URL = 'https://~~';<br>"
r4.innerHTML += "function getFetchUsers() { fetch(API_URL).then(() => {}).then(() => {}).catch(() => {}) } <br>"
r4.innerHTML += "getFetchUsers()<br>"
r4.innerHTML += "==element를 확인=="

//**********사용1================================================
// //***********동기 방식
// console.log('=== 동기 방식 ===');
// console.log('1. 라면 장보기');
// console.log('2. 물 끓이기');
// console.log('3. 끓는 물에 라면, 스프 넣고, 익히기');
// console.log('4. 완성');

// //************비동기 방식
// console.log('=== 비동기 방식 ===');

// setTimeout(() => {
//     console.log('A. 라면 장보기');
// }, 1000);
// console.log('B. 물 끓이기');
// console.log('C. 끓는 물에 라면, 스프 넣고, 익히기');
// console.log('D. 완성');

// //************================================================

//라면 장보기 성공일 경우
//const 라면_장보기 = new Promise((성공,실패) =>{})
// const 라면_장보기 = new Promise((resolve, reject) => {

//     //----------------setTimeout(() => {구현}, 2000 2초 경과)
//     setTimeout(() => {
//         console.log('A. 라면 장보기');
//         console.log('B. 라면 물 끓이기');
//         resolve('라면 장보기 완료');
//     }, 2000);
// });

//----------------라면_장보기.then((결과)=>{성공이후 실행}),catch((결과) => {예외상황발생시의 실행})
// 라면_장보기
//     .then((result) => {
//         console.log(result);
//         console.log('C. 끓는 물에 라면, 스프 넣고, 익히기')
//         console.log('D. 라면 완성 후 시식하기')
//         console.log("=======================")
//     })
//     .catch((result) => {
//         console.log(result);
//         console.log('라면 만들기 중단');
//         console.log("=======================")
//     });

//===========================================================

//커피 장보기 실패일 경우
// const 커피_장보기 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('E. 커피 장보기');
//         console.log('F. 커피 물 끓이기');
//         reject('커피 품절');
//     }, 4000);
// });

// 커피_장보기
//     .then((result) => {
//         console.log('G. 끓는 물에 커피 넣고, 젓기');
//         console.log('H. 커피 완성 후 마시기')
//         console.log("=======================")
//     })
//     .catch((result) => {
//         console.log(result);
//         console.log('커피 만들기 중단');
//         console.log("=======================")
//     });

// //===========================================================

// //파스타 장보기 팬딩일 경우
// const 파스타_장보기 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('결과: 성공도 실패도 아님')
//     }, 6000);
// });

// setTimeout(() => {
//    console.log('라면_장보기: ', 라면_장보기); // PromiseState: "fulfilled"
//    console.log('커피_장보기: ', 커피_장보기); // PromiseState: "rejected"
//    console.log('파스타_장보기: ', 파스타_장보기); // PromiseState: "pending"
// }, 8000);


//**********사용2================================================

// const 라면_장보기 = () => ( new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('A. 라면 장보기');
//         console.log('B. 라면 물 끓이기');
//         resolve('라면 장보기 완료');
//     }, 1000);
// }));

// const 커피_장보기 = () => ( new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('E. 커피 장보기');
//         console.log('F. 커피 물 끓이기');
//         reject('커피 품절');
//     }, 500);
// }));

// const 약속배려함수 = async () => {
//     try{
//         const result = await 라면_장보기();
//         console.log('C. 끓는 물에 라면, 스프 넣고, 익히기');
//         console.log('D. 라면 완성 후 시식하기');
//     } catch(result){
//         console.log(result);
//         console.log('라면 만들기 중단');
//         return;
//     }

//     try{
//         const result = await 커피_장보기();
//         console.log('G. 끓는 물에 커피 넣고, 젓기');
//         console.log('H. 커피 완성 후 마시기');
//     } catch(result){
//         console.log(result);
//         console.log('커피 만들기 중단');
//     }
// }

// 약속배려함수();

//**********사용3================================================

const API_URL = "https://jsonplaceholder.typicode.com/users";

function getFetchUsers() {
    console.log("json파일을 읽어보고 있어요...")

    // fetch(API_URL).then(() => {}).then(() => {}).catch(() => {})
        fetch(API_URL).then((response) => {
            //response 구현부
            console.log(response.status);
            if(!response.ok){
                throw new Error(`응답오류! 상태: ${response.status}`);
            }
            return response.json();
        }).then((users) => {
            users.slice(0,3).forEach((user, index) => {
                console.log(`${index + 1} ${user.name} (${user.eamil})`);
            })
            //users 구현부

        }).catch((error) => {
            //네트워크 또는 처리 오류시 실행
            console.error("Error fetching users:", error.message);
        })
}
getFetchUsers()