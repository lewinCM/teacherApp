import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { BlogSidebarComponent } from './components/blog-sidebar/blog-sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrubsMapComponent } from './components/breadcrubs-map/breadcrubs-map.component';
import { AboutAreaComponent } from './components/about-area/about-area.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PaginacionComponent,
    BlogSidebarComponent,
    MenuComponent,
    BreadcrubsMapComponent,
    AboutAreaComponent,

  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    PaginacionComponent,
    BlogSidebarComponent,
    MenuComponent,
    BreadcrubsMapComponent
  ]
})
export class SharedModule { }
