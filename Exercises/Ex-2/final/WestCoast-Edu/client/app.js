'use strict';

/* Modal Window */
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn-close-modal');
const closeModalWindow = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModalWindow);

/* End Modal Window */

class Course {
  constructor(courseNumber, title, description, duration) {
    this.courseNumber = courseNumber;
    this.title = title;
    this.description = description;
    this.duration = duration;
  }
}

const courseListElem = document.querySelector('.course-list');

let courses = [];

courses.push(
  new Course(
    '1365',
    'Javascript from start to end',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
    30
  ),
  new Course(
    '1366',
    'NodeJs for beginners',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
    10
  ),
  new Course(
    '1367',
    'Typescript for JavaScript developers',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
    20
  ),
  new Course(
    '1368',
    'Web API with NodeJs',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
    25
  ),
  new Course(
    '1369',
    'Introduction to programming in Swift',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
    50
  )
);

for (let course of courses) {
  courseListElem.insertAdjacentHTML(
    'beforeend',
    `<tr><td>${course.courseNumber}</td><td>${course.title}</td><td>${course.duration}</td></tr>`
  );
}

const tableRows = document.querySelectorAll('.course-list > tr');
tableRows.forEach((item) => {
  const courseNo = item.childNodes[0].firstChild.nodeValue;
  addClickEvent(item, courseNo);
});

function addClickEvent(elem, courseNo) {
  elem.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    const course = courses.find((course) => course.courseNumber === courseNo);
    modal.querySelector('.modal-header').innerHTML = `${course.title}`;
    modal.querySelector('.details').innerHTML = `${course.description}`;
    modal.querySelector(
      '.sub-details'
    ).innerHTML = `Kurslängd ${course.duration} timmar`;
  });
}

/* Exercise 2. */
//Adding Inheritance...
class Person {
  constructor(birthDate, email, firstName, lastName, phone) {
    this.birthDate = birthDate;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }

  displayInfo(){
    return `${this.firstName} ${this.lastName}`;
  }
}

class Teacher extends Person {
  constructor(birthDate, email, firstName, lastName, phone, expertise) {
    super(birthDate, email, firstName, lastName, phone);
    this.expertise = expertise;
  }

  displayInfo() {
    return `${this.firstName} ${this.lastName} (${this.expertise})`;
  }
}
class Student extends Person {
  constructor(birthDate, email, firstName, lastName, phone, studentId) {
    super(birthDate, email, firstName, lastName, phone);
    this.studentId = studentId;
  }
}
class Employee extends Person {
  constructor(
    birthDate,
    email,
    firstName,
    lastName,
    phone,
    hireDate,
    employeeNumber
  ) {
    super(birthDate, email, firstName, lastName, phone);
    this.hireDate = hireDate;
    this.employeeNumber = employeeNumber;
  }
}

const student = new Student(
  '1989-01-10',
  'nisse@gmail.com',
  'Nils',
  'Olsson',
  '070-1234567',
  '657'
);
const employee = new Employee(
  '1987-11-16',
  'eva.eriksson@mail.com',
  'Eva',
  'Eriksson',
  '0705-323432',
  '2012-05-01',
  'A1001'
);

const teachers = [];

teachers.push(
  new Teacher(
    '1958-02-13',
    'ulf.bilting@hotmail.com',
    'Ulf',
    'Bilting',
    '072-808876',
    ['Java', 'C++', 'C']
  ),
  new Teacher(
    '1964-02-20',
    'michael.gustavsson@gmail.com',
    'Michael',
    'Gustavsson',
    '072-111111',
    ['C++', 'JavaScript', 'TypeScript','Angular', 'React', 'MSSQL']
  ),
  new Teacher(
    '1977-01-10',
    'mikael.zetterstrom@hotmail.com',
    'Mikael',
    'Zetterström',
    '072-222222',
    ['C', 'C++']
  ),
  new Teacher(
    '1943-10-23',
    'ulf.malmstrom@hotmail.com',
    'Ulf',
    'Malmström',
    '072-33333',
    ['Visual Basic', 'Access', 'Excel']
  ),
);
console.log(student, employee, teachers);

const teacherElem = document.querySelector('.teachers');

for(let teacher of teachers){
  teacherElem.insertAdjacentHTML(
    'beforeend',
    `<p class="teacher-list">${teacher.displayInfo()}</p>`
  );
}
