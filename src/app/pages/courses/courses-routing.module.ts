import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSidebarMainComponent } from './course-sidebar-main/course-sidebar-main.component';

const routes: Routes = [{ path: '', component: CourseSidebarMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
