import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PrincipalComponent } from './school/principal/principal.component';


const routes: Routes = [
  {
    path:'one',
    component:FirstComponent
  },
  {
    path:'pri',
    component:PrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
