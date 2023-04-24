import { AboutComponent } from './about/about.component';
// import { DetailsInstructoresComponent } from './details-instructores/details-instructores.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'acerca', component: AboutComponent },
      // { path: 'instructores/:id', component: DetailsInstructoresComponent },
      { path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },
      { path: 'cursos', loadChildren: () => import(`./courses/courses.module`).then(m => m.CoursesModule) },
      { path: 'mapa', loadChildren: () => import(`./map/map.module`).then(m => m.MapModule) },
      { path: 'contacto', loadChildren: () => import(`./contact/contact.module`).then(m => m.ContactModule) },
      { path: 'blog', loadChildren: () => import(`./blog/blog.module`).then(m => m.BlogModule) },

      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
