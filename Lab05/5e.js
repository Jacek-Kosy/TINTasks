class Student {
    constructor(firstName, lastName, gradeArray) {
        this.firstName = firstName
        this.lastName = lastName
        this.grades = gradeArray
    }
    get getAverageGrade() {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length
    }
    get getFullName() {
        return this.firstName + " " + this.lastName
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
let s = new Student("Mateusz", "Nowak", [5, 5, 3, 5, 4, 5, 5])
console.log(s.getFullName)
console.log(s.getAverageGrade)
s.setFullName = "Jacek Soplica"
console.log(s.getFullName)
console.log(s.getAverageGrade)