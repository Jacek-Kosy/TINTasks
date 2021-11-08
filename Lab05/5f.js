class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    get getFullName() {
        return this.firstName + ' ' + this.lastName
    }
    set setFirstName(newFirstName) {
        this.firstName = newFirstName
    }
    set setLastName(newLastName) {
        this.lastName = newLastName
    }
    set setFullName(fullName) {
        let names = fullName.split(' ')
        this.setFirstName = names[0]
        this.setLastName = names[1]
    }
}
class Student extends Person {
    constructor(firstName, lastName, gradesArray) {
        super(firstName, lastName);
        this.grades = gradesArray
    }
    get getAverageGrade() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length
    }
}
let s = new Student("Han", "Solo", [2, 2, 3, 4, 4, 5, 5])
console.log(s.getFullName)
console.log(s.getAverageGrade)
s.setFullName = "Lando Calrissian"
console.log(s.getFullName)
console.log(s.getAverageGrade)
