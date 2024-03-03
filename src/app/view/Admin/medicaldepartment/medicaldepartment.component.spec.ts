import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaldepartmentComponent } from './medicaldepartment.component';

describe('MedicaldepartmentComponent', () => {
  let component: MedicaldepartmentComponent;
  let fixture: ComponentFixture<MedicaldepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicaldepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicaldepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
