class CourseListView {
  _parentElement = document.querySelector('.course-list');

  //Publisher...
  addHandlerRender(subscriber) {
    ['load'].forEach((e) => window.addEventListener(e, subscriber));
  }

  //Publisher...
  addHandlerClickRow(subscriber) {
    this._parentElement.addEventListener('click', function(e) {
      const row = e.target.parentElement;
      const { courseno } = row.dataset;
      subscriber(courseno);
    });

    /* This is bad code, especially if we have hundreds or
    thousands of rows in the table. Each iteration will create
    a copy in memory */
    // const rows = this._parentElement.querySelectorAll('tr');
    // rows.forEach((row) => {
    //   const { courseno } = row.dataset;
    //   row.addEventListener('click', (e) => {
    //     subscriber(courseno);
    //   });
    // });

  }

  renderCourses(data) {
    let markup = data.map(this._generateMarkup).join('');
    this._parentElement.insertAdjacentHTML('beforeend', markup);        
  }

  _generateMarkup(row) {
    return `<tr data-courseno=${row.courseNumber}><td>${row.courseNumber}</td><td>${row.title}</td><td>${row.duration}</td></tr>`;
  }
}

export default new CourseListView();
