import {Component, OnInit, TemplateRef, viewChild} from '@angular/core';
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
export class AppComponent implements OnInit {
  task1 = viewChild<TemplateRef<any>>("task1");
  task2 = viewChild<TemplateRef<any>>("task2");
  task3 = viewChild<TemplateRef<any>>("task3");
  task4 = viewChild<TemplateRef<any>>("task4");

  tasks: task[] = [];

  ngOnInit() {
    this.tasks = [
      {
        id: crypto.randomUUID(),
        title: 'Task 1',
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 4,
        template: this.task1()
      },
      {
        id: crypto.randomUUID(),
        title: 'Task 2',
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 2,
        template: this.task2()
      },
      {
        id: crypto.randomUUID(),
        title: 'Task 3',
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 7,
        template: this.task3()
      },
      {
        id: crypto.randomUUID(),
        title: 'Task 4',
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 3,
        template: this.task4()
      },
    ];
  }
}
