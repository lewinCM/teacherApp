import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseSidebarComponent } from './course-sidebar/course-sidebar.component';
import { CourseSidebarMainComponent } from './course-sidebar-main/course-sidebar-main.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { RelatedCourseComponent } from './related-course/related-course.component';


@NgModule({
  declarations: [
    CourseSidebarComponent,
    CourseSidebarMainComponent,
    RelatedCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    HomeModule
  ]
})
export class CoursesModule { }
