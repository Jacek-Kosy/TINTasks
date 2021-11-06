function studentConstructor(firstName, lastName, gradesArray) {
    return {
        firstName: firstName,
        lastName: lastName,
        grades: gradesArray,
        getGradeAverage() {
            return this.grades.reduce((a, b) => a + b, 0) / this.grades.length
        },
        printFullNameAndGradeAverage() {
            console.log(firstName + ' ' + lastName)
            console.log(this.getGradeAverage())
        }
    }
}
studentConstructor('Jan', 'Kowalski', [3, 4, 5, 4, 3]).printFullNameAndGradeAverage()