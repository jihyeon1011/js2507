const person = {
    myName: "지현",
    age: 20,
    eyeColor:"brown"
}

//const person2 = new object()
const person2 = new Object(
    {
        muName: "지현2",
        age: 40,
        eyeColor: "green"
    }
)

//기존obj
const person3 = {
    myName: "지현3",
    age: 60,
    eyeColor: "blue"
}

//새로운obj
const man = Object.create(person3)
//man.myName
man.myName = "Peter"
man.etc = "etc"

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
]
const myObj = Object.fromEntries(fruits)
myObj.etc = "etc"

const person5 = {
  myName: "지현",
  age: 80,
  eyeColor: "red"
}

const person5_2 = {
  myName: "안나",
  age: 100,
}

//person5의 값이 변경됨(person5_2의 이름,나이 가져옴)
Object.assign(person5,person5_2)
//assign(){행위를 정의해준다}메소드


//클래스: 기획서(설계도)
//객체공장: 클래스를 통해서 오브젝트를 (생성할때)만들때, 생성자
function Person9(first, last, age, eye){
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
}

const woman1 = new Person9("지현","최",100,"brown")
/// woman.firstName

// 클래스:책
function Book(tit, sub, price, pages){
    this.title = tit
    this.subj = sub
    this.price = price
    this.pages = pages
}
const book1 = new Book("리액트", "한빛", 35000, 300)
const book2 = new Book("리액트2", "한빛", 35000, 300)
const book3 = new Book("리액트3", "한빛", 35000, 300)
const book4 = new Book("리액트4", "한빛", 35000, 300)
const book5 = new Book("리액트5", "한빛", 35000, 300)
const book6 = new Book("리액트6", "한빛", 35000, 300)