function studentConstructor(firstName, lastName, gradesArray) {
    return {
        firstName: firstName,
        lastName: lastName,
        grades: gradesArray,
        getGradeAverage() {
            return this.grades.reduce((a, b) => a + b, 0) / this.grades.length
        },
        set setFirstName(newFirstName) {
            this.firstName = newFirstName
        },
        set setLastName(newLastName) {
            this.lastName = newLastName
        },
        set setFullName(fullName) {
            let names = fullName.split(' ')
            this.setFirstName = names[0]
            this.setLastName = names[1]
        },
        get getFullName() {
            return this.firstName + " " + this.lastName
        }
    }
}
let student = studentConstructor('Jan', 'Kowalski', [2, 3, 4, 5, 3, 4, 2, 3])
console.log(student.firstName)
console.log(student.lastName)
console.log(student.getGradeAverage())
student.setFullName = 'Anna Nowak'
console.log(student.getFullName)
console.log(student.getGradeAverage())