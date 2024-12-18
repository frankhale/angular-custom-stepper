import {Component, OnInit, TemplateRef, viewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {TaskListComponent} from './task-list/task-list.component';
import {task} from './models/task';
import {StepProgressComponent} from './step-progress/step-progress.component';

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
    StepProgressComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  task1 = viewChild<TemplateRef<any>>("task1");
  task2 = viewChild<TemplateRef<any>>("task2");
  task3 = viewChild<TemplateRef<any>>("task3");
  task4 = viewChild<TemplateRef<any>>("task4");
  task5 = viewChild<TemplateRef<any>>("task5");

  tasks: task[] = [];
  startingTask: string | undefined;

  ngOnInit() {
    this.tasks = [
      {
        id: crypto.randomUUID(),
        title: 'Task 1',
        started: false,
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 4,
        template: this.task1()
      },
      {
        id: crypto.randomUUID(),
        title: 'Task 2',
        started: false,
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 2,
        template: this.task2()
      },
      {
        id: crypto.randomUUID(),
        title: 'Task 3',
        started: false,
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 7,
        template: this.task3()
      },
      {
        id: crypto.randomUUID(),
        title: 'Task 4',
        started: false,
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 3,
        template: this.task4()
      },
      {
        id: crypto.randomUUID(),
        title: 'Task 5',
        started: false,
        completed: false,
        targetCompletionDate: new Date(),
        subTasks: 10,
        template: this.task5()
      },
    ];

    this.tasks.find(t => {
      if(t.title === 'Task 1') {
        this.startingTask = t.id;
      }
    });
  }
}
