import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-course',
  templateUrl: './related-course.component.html',
  styleUrls: ['./related-course.component.scss']
})
export class RelatedCourseComponent {
  @Input () white_bg : string | undefined;

}
