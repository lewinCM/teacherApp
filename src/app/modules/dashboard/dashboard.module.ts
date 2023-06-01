import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StudentsComponent } from './students/students.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from './components/footer-dashboard/footer-dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentsComponent,
    TeacherComponent,
    AdminComponent,
    SidebarComponent,
    HeaderDashboardComponent,
    FooterDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
