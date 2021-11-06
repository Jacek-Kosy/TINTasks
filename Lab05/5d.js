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
        setFullName(nFirstName, nLastName) {
            this.setFirstName = nFirstName
            this.setLastName = nLastName
        },
    }
}
let student = studentConstructor('Jan', 'Kowalski', [2, 3, 4, 5, 3, 4, 2, 3])
console.log(student.firstName)
console.log(student.lastName)
console.log(student.getGradeAverage())
student.setFullName('Anna', 'Nowak')
console.log(student.firstName)
console.log(student.lastName)
console.log(student.getGradeAverage())