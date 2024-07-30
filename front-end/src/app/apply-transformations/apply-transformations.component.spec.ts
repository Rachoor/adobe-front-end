import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTransformationsComponent } from './apply-transformations.component';

describe('ApplyTransformationsComponent', () => {
  let component: ApplyTransformationsComponent;
  let fixture: ComponentFixture<ApplyTransformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyTransformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyTransformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
