import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdirComponent } from './classdir.component';

describe('ClassdirComponent', () => {
  let component: ClassdirComponent;
  let fixture: ComponentFixture<ClassdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
