import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeuiComponent } from './homeui.component';

describe('HomeuiComponent', () => {
  let component: HomeuiComponent;
  let fixture: ComponentFixture<HomeuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
