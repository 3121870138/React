

class People {
  constructor(name, age) {
    this.name = name
    this.age = age 
  }
  sayInfo () {
    console.log(`${this.name}今年${this.age}岁`)
  }
}
let people = new People('小明', 20)
people.sayInfo()
