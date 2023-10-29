

function inheritance() {
    class collegeStudent {
        constructor(name) {
            this.name = name;
            this.class = 'bsc';
            // this.marks = 100;
        }

        marks() {
            console.log('Marks in maths is 80');
        }
    }

    class Student extends collegeStudent {
        constructor(name) {
            super(name);
            this.marks = 90;
        }
        display() {
            console.log('Marks is ' + this.marks);
        }
    }

    let chetan = new Student();

    chetan.display();
    console.log(chetan.marks);

}

function inheritance1() {
    class Student {
        constructor(name) {

            this.name = name
            this.class = 'bsc';
        }
    }

    class StudentFunction extends Student {
        constructor(name) {
            super(name);
            this.class = 'bca';
        }
        display() {
            console.log(`Name is ${this.name}`);
            console.log(`Class is ${this.class}`);

        }
    }

    let chetan = new StudentFunction('chetan');

    chetan.display();
}

// inheritance1();

function inheritance2() {

    class student {
        constructor(name) {
            this.name = name
        }
        display1() {
            console.log(`Name is ${this.name}`);
            console.log('parent');
        }
    }

    class Student extends student {
        constructor(name) {
            super(name)
        }
        display() {
            console.log(`Name is ${this.name}`);
            console.log('child');
        }
    }

    let chetan = new Student('chetan')

    chetan.display1();
}



inheritance2();