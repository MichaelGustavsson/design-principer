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
    modal.querySelector('.sub-details').innerHTML = `Kurslängd ${course.duration} timmar`;
  });
}
