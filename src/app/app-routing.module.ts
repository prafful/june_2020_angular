import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PrincipalComponent } from './school/principal/principal.component';
import { AlldirectiveComponent } from './directive/alldirective/alldirective.component';
import { FordirComponent } from './directive/fordir/fordir.component';
import { IfdirComponent } from './directive/ifdir/ifdir.component';
import { ClassdirComponent } from './directive/classdir/classdir.component';
import { StyledirComponent } from './directive/styledir/styledir.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'one-two',
    pathMatch:'full'
  },
  {
    path:'one-one',
    component:FirstComponent
  },
  {
    path:'one-two',
    component:PrincipalComponent
  },
  {
    path:'one-three',
    component:AlldirectiveComponent,
    children:[
      {
        path:'',
        redirectTo:'if',
        pathMatch:'full'
      },
      {
        path:'for',
        component:FordirComponent
      },
      {
        path:'if',
        component:IfdirComponent
      },
      {
        path:'classdir',
        component:ClassdirComponent
      },
      {
        path:'styledir',
        component:StyledirComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }