import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProcessingListComponent } from './in-processing-list.component';

describe('InProcessingListComponent', () => {
  let component: InProcessingListComponent;
  let fixture: ComponentFixture<InProcessingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InProcessingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProcessingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
