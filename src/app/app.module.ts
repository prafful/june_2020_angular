import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { PrincipalComponent } from './school/principal/principal.component';
import { TeacherComponent } from './school/teacher/teacher.component';
import { StudentComponent } from './school/student/student.component';
import { Teacher1Component } from './school/teacher1/teacher1.component';
import { Student1Component } from './school/student1/student1.component';
import { Student2Component } from './school/student2/student2.component';
import { Student3Component } from './school/student3/student3.component';
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
import { SortstringarrayPipe } from './custompipes/sortstringarray.pipe';
import { ConsumeallComponent } from './consume/consumeall/consumeall.component';
import { LocaloneComponent } from './consume/localone/localone.component';
import { LocaltwoComponent } from './consume/localtwo/localtwo.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { AddfriendComponent } from './consume/addfriend/addfriend.component';
import { EditfriendComponent } from './consume/editfriend/editfriend.component';

@NgModule({
  declarations: [
    RootComponent,
    FirstComponent,
    PrincipalComponent,
    TeacherComponent,
    StudentComponent,
    Teacher1Component,
    Student1Component,
    Student2Component,
    Student3Component,
    AlldirectiveComponent,
    FordirComponent,
    IfdirComponent,
    ClassdirComponent,
    StyledirComponent,
    AllComponent,
    TemplateComponent,
    ReactiveComponent,
    AllpipeComponent,
    InbuiltComponent,
    CustomComponent,
    SortstringarrayPipe,
    ConsumeallComponent,
    LocaloneComponent,
    LocaltwoComponent,
    RemoteComponent,
    AddfriendComponent,
    EditfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
