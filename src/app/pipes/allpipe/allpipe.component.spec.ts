import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpipeComponent } from './allpipe.component';

describe('AllpipeComponent', () => {
  let component: AllpipeComponent;
  let fixture: ComponentFixture<AllpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
