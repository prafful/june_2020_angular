import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PrincipalComponent } from './school/principal/principal.component';
import { AlldirectiveComponent } from './directive/alldirective/alldirective.component';
import { FordirComponent } from './directive/fordir/fordir.component';
import { IfdirComponent } from './directive/ifdir/ifdir.component';
import { ClassdirComponent } from './directive/classdir/classdir.component';
import { StyledirComponent } from './directive/styledir/styledir.component';
import { AllComponent } from './forms/all/all.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { AllpipeComponent } from './pipes/allpipe/allpipe.component';
import { InbuiltComponent } from './pipes/inbuilt/inbuilt.component';
import { CustomComponent } from './pipes/custom/custom.component';
import { ConsumeallComponent } from './consume/consumeall/consumeall.component';
import { LocaloneComponent } from './consume/localone/localone.component';
import { LocaltwoComponent } from './consume/localtwo/localtwo.component';
import { RemoteComponent } from './consume/remote/remote.component';


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
  },
  {
    path:'allforms',
    component:AllComponent,
    children:[
      {
        path:'template',
        component:TemplateComponent
      },
      {
        path:'reactive',
        component:ReactiveComponent
      }
    ]
  },
  {
    path:'allpipe',
    component:AllpipeComponent,
    children:[
      {
        path:'inbuilt',
        component:InbuiltComponent
      },
      {
        path:'custom',
        component:CustomComponent
      }
    ]
  },
  {
    path:'service',
    component:ConsumeallComponent,
    children:[
      {
        path:'localone',
        component:LocaloneComponent
      },
      {
        path:'localtwo',
        component:LocaltwoComponent
      },
      {
        path:'remote',
        component:RemoteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
