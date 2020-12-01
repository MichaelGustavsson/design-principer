import * as model from '../models/courses-model.js';
import courseListView from '../views/courses-view.js';
import CourseDetailView from '../views/course-detail-view.js';
import * as dialogController from '../controllers/dialog-controller.js';

const coursesController =  function() {

  // 1. Load courses.
  model.loadCourses();
  // 2. Rendering the courses list.
  courseListView.renderCourses(model.state.courses);
  // 3. Connect to the views publisher. Subscriber...
  courseListView.addHandlerClickRow(CoursesDetails);
};

const CoursesDetails = function(courseNo){
  model.findCourse(courseNo);
  CourseDetailView.renderDialog(model.state.course);
  //Subscribe to close dialog...
  CourseDetailView.addHandlerCloseDialog(dialogController.closeDialog);
}
const init = function() {
  //Subscriber...
  courseListView.addHandlerRender(coursesController);  
};

init();

