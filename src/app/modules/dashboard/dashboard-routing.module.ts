import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StudentsComponent } from './students/students.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      { path: "student", component: StudentsComponent },
      { path: "admin", component: AdminComponent },
      { path: "teacher", component: TeacherComponent },
    ]
  },
  {
    path: "**", redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
