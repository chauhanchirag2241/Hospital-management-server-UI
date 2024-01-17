import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdoctorComponent } from './newdoctor.component';

describe('NewdoctorComponent', () => {
  let component: NewdoctorComponent;
  let fixture: ComponentFixture<NewdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
