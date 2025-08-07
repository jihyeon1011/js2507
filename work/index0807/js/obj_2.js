//1번 const 이름 = { 속성 : 값 etc...};

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor:"blue"
};

console.log("1.객체 만들기:", person1);

//2번 nationallity(추가), delete(삭제)

const person2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 30
};
person2.nationallity = "Korean";
delete person2.age;

console.log("2.속성 접근/추가/삭제:", person2);

//3번 속성: 함수(){return this.~ + this.~}

const person3 = {
    firstName: "Alice",
    lastName: "Brown",
    fullName: function(){
        return this.firstName + "" + this.lastName;
    }
};

console.log("3.객체 메서드:", person3.fullName());

//4번 대문자로 시작된 함수(생성틀)

function person(first, last, age, eye){
    this.firstName = first;1
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const man1 = new person("철수","김",30,"black");
console.log("4.생성자 함수:", man1)

//5번 key: value

const person5 = {
    fname: "Linda",
    Iname: "Park",
    age: 40
};

console.log("5.객체 반복:");

for(let key in person5){
    console.log(key + ":", person5[key]);
}

//6번 Object.keys / keyList

const personkeys = {
    name: "안나",
    age: 25,
    city: "서울"
};

const keysList = Object.keys(personkeys);
console.log("6. Object.keys() 키 목록:", keysList);

//7번 Object.values()

const personValues={
    name: "피터",
    age: 13,
    city: "수원"
};

const valuesList = Object.values(personValues);
console.log("7. Object.values() 값 목록:", valuesList);

//8번 Object.assign()

const baseObj = {name: "길동", age: 35};
const extraObj = {city: "부산", hobby:"컴퓨터"};

const combinedObj = Object.assign({}, baseObj, extraObj);
console.log("8. Object.assign() 합친 객체:", combinedObj);
