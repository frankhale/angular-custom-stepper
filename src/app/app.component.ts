import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {STEPPER_GLOBAL_OPTIONS, StepperSelectionEvent} from '@angular/cdk/stepper';
import {InProcessingListComponent} from './in-processing-list/in-processing-list.component';
import {TaskListComponent} from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    InProcessingListComponent,
    TaskListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class AppComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit() {

  }

  selectedStepIndex(index: number) {
    console.log(`selectedStepIndex: selected index: ${index}`);
  }

}
