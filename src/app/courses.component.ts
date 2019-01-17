import { Component } from '@angular/core';


@Component({
  selector: 'courses', // courses
  template: '<h2>{{ getTitle()asdfasfafsdasfd }}</h2>'
})
export class CoursesComponent {
  title = "List of Courses";

  getTitle() {
    return this.title;
  }
}
