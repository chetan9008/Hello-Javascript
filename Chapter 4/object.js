const object = {
    name: 'chetan',
    class: 'bsc'
}

console.log(typeof (object));
console.log(object.name);
console.log(object["class"]);

let student = {
    name: 'chetan',
    class: 'bsc',
    marks: {
        c: 90,
        cpp: 95
    }
}

console.log(student.marks.c);

let warehouse = {
    quantity: 2000,
    showQuantity: function () { console.log(`Quantity is ${this.quantity} units `); }
}
warehouse.showQuantity();

let collegeStudent = {
    name: 'chetan',
    rollNo: 14,
    totalMarks: 80,
    studentDetail: function () {
        console.log(`Name : ${this.name}`);
        console.log(`Roll No : ${this.rollNo}`);
        console.log(`Total Marks : ${this.totalMarks}`);
    },
    result: function () {
        if (this.totalMarks < 40)
            console.log(`${this.name} is fail`);
        else
            console.log(`${this.name} is pass`);

    }
}

collegeStudent.studentDetail();
collegeStudent.result();