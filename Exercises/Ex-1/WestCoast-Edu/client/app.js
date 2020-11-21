'use strict';

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
  new Course('1365', 'Javascript from start to end', 'description', 30),
  new Course('1366', 'NodeJs for beginners', 'description', 10),
  new Course('1367', 'Typescript for JavaScript developers', 'description', 20),
  new Course('1368', 'Web API with NodeJs', 'description', 25),
  new Course('1369', 'Introduction to programming in Swift', 'description', 50)
);

for(let course of courses){
  courseListElem.insertAdjacentHTML('beforebegin',
    `<tr><td>${course.courseNumber}</td><td>${course.title}</td><td>${course.duration}</td><td><i class='fal fa-info-circle'></i></td></tr>`
  );
}

