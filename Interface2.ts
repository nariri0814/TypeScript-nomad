interface User {
    fistName: string,
    lastName: string,
    sayHi(name: string):string,
    fullName():string
}
interface Human {
    health: number
}

class Player implements User, Human {
    // implements를 쓰면 자바스크립트 코드가 간결해짐
    // implements를 쓰면 public만 가능
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    fistName: string
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `Hello ${name} My name is ${this.fullName()}`
    }
}