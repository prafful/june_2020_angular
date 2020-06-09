import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    StyledirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }