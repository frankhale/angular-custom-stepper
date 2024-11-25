import {AfterViewInit, Component, Directive, input, TemplateRef, viewChildren} from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {TaskComponent} from "../task/task.component";
import {task} from '../models/task';
import {NgTemplateOutlet} from '@angular/common';

@Directive({
  selector: '[task]'
})
export class TaskDirective {
  readonly id = input.required<string>();

  constructor(public template: TemplateRef<any>) {
  }
}

@Component({
  selector: 'app-task-list',
  imports: [
    MatProgressBar,
    TaskComponent,
    NgTemplateOutlet,
    TaskDirective
  ],

  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements AfterViewInit {
  readonly tasks = input.required<task[]>();
  readonly directives = viewChildren(TaskDirective);

  selectedTemplate: TemplateRef<any> | null = null;
  selectedTask?: string;

  ngAfterViewInit() {
    this.directives().forEach((directive, index) => {
      console.log(`Template: ${directive.id()}`);
    });
  }

  select(id: string) {
    const task = this.tasks().find(task => task.id === id);
    if (task) {
      console.log(`Task found: ${task.title}`);
      this.selectedTask = task.id;
      this.selectedTemplate = this.directives().find(directive => directive.id() === task?.id)?.template || null;
    }
  }
}
