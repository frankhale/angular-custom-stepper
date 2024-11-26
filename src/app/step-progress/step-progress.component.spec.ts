import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepProgressComponent } from './step-progress.component';

describe('StepProgressComponent', () => {
  let component: StepProgressComponent;
  let fixture: ComponentFixture<StepProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
