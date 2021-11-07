function Student() {
    this.subjects = ['PE', 'Math', 'Geography']
}

Student.prototype = {
    createStudent: function(firstName, lastName, id) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
    }
}

let student = new Student()

student.createStudent('Robert', 'Lewandowski', 9)

console.log(student)