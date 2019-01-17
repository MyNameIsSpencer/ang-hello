// import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <input #email (keyup.enter) = "onKeyUp(email.value)" />
  `
})

export class CoursesComponent {
  onKeyUp(email) { console.log(email);
  }
}


// template: `
//   <input (keyup)="onKeyUp($event)" />
// `
// onKeyUp($event) { if ($event.keyCode === 13) console.log("You pressed the ENTER")}


// template: `
//   <div (click)="onDivClick()">
//     <button (click)="onSave($event)">Save</button>
//   </div>
// `
// export class CoursesComponent {
//   onDivClick() { console.log( "Div Clicked" ); }
//   onSave($event) {
//     $event.stopPropagation();
//     console.log( "Clickered", $event );
//   }
// }

// template: `
//   <button class="btn btn-primary" [class.active]="isActive">Save</button>
// `
//
// isActive = true;


// export class CoursesComponent {
//   title = "List of Courses";
//   // courses;
//   imageUrl = "http://lorempixel.com/400/200";
//   colSpan = 2;
//
//   // constructor(service: CoursesService) {
//   //   this.courses = service.getCourses();
//   // }
// }




// <h2>{{ getTitle() }}</h2>




// *ngFor syntax

// @Component({
//   selector: 'courses', // courses
//   template: `
//     <h2>{{ title }}</h2>
//     <ul>
//       <li *ngFor="let course of courses">
//         {{ course }}
//       </li>
//     </ul>
//
//     <img src="{{ imageUrl }}" />
//     <img [src]="imageUrl" />
//     `
// })



// Property Binding with html properties that don't map from html to DOM
// template: `
//   <img [src]="imageUrl"/>
//   <table>
//     <tr>
//       <td [attr.colspan]="colSpan">
//       </td>
//     </tr>
//   </table>
// `
