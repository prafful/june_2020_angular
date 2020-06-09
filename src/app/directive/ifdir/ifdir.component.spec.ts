import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdirComponent } from './ifdir.component';

describe('IfdirComponent', () => {
  let component: IfdirComponent;
  let fixture: ComponentFixture<IfdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
