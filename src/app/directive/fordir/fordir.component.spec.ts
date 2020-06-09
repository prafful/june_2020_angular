import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FordirComponent } from './fordir.component';

describe('FordirComponent', () => {
  let component: FordirComponent;
  let fixture: ComponentFixture<FordirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FordirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FordirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
