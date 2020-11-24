import * as model from '../models/courses-model.js';
import courseListView from '../views/courses-view.js';

const coursesController =  function() {

  // 1. Load courses.
  model.loadCourses();
  // 2. Rendering the courses list.
  courseListView.render(model.state.courses);
};

const init = function() {
  courseListView.addHandlerRender(coursesController);
};

init();

