class CourseListView {
  _parentElement = document.querySelector('.course-list');
  _data;

  addHandlerRender(subscriber) {
    ['load'].forEach((e) => window.addEventListener(e, subscriber));
  }

  render(data) {
    this._data = data;
    let markup = this._data.map(this._generateMarkup).join('');
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _generateMarkup(data) {
    return `<tr><td>${data.courseNumber}</td><td>${data.title}</td><td>${data.duration}</td></tr>`;
  }
}

export default new CourseListView();