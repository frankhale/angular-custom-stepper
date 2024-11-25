import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {TaskListComponent} from './task-list/task-list.component';
import {task} from './models/task';

@Component({
  selector: 'app-root',
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TaskListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tasks: task[] = [
    {
      id: crypto.randomUUID(),
      title: 'Task 1',
      completed: false,
      targetCompletionDate: new Date()
    },
    {
      id: crypto.randomUUID(),
      title: 'Task 2',
      completed: false,
      targetCompletionDate: new Date()
    },
    {
      id: crypto.randomUUID(),
      title: 'Task 3',
      completed: false,
      targetCompletionDate: new Date()
    },
    {
      id: crypto.randomUUID(),
      title: 'Task 4',
      completed: false,
      targetCompletionDate: new Date()
    },
  ]
}
