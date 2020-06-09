import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledirComponent } from './styledir.component';

describe('StyledirComponent', () => {
  let component: StyledirComponent;
  let fixture: ComponentFixture<StyledirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
