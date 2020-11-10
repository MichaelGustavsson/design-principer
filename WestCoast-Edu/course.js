const Course = function (courseNumber, name, hours) {
  this.courseNumber = courseNumber;
  this.name = name;
  this.hours = hours;
};

Course.prototype.Save = function () {
  console.log("Save");
};

Course.prototype.teacher = 'Michael';

Course.prototype.AddCourse = function () {
  console.log("Adding Course");
};
