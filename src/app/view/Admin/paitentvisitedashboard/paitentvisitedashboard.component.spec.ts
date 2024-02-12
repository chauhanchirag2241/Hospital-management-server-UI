import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentvisitedashboardComponent } from './paitentvisitedashboard.component';

describe('PaitentvisitedashboardComponent', () => {
  let component: PaitentvisitedashboardComponent;
  let fixture: ComponentFixture<PaitentvisitedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaitentvisitedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaitentvisitedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
