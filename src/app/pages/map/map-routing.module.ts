import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './full-screen/full-screen.component';

const routes: Routes = [
  {
    path: '',component: FullScreenComponent,
    children: [
      { path: 'fullscreen', component: FullScreenComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
