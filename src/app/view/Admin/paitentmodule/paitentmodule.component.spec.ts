import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaitentmoduleComponent } from './paitentmodule.component';

describe('PaitentmoduleComponent', () => {
  let component: PaitentmoduleComponent;
  let fixture: ComponentFixture<PaitentmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaitentmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaitentmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
