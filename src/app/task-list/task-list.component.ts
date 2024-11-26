import {AfterViewInit, Component, Directive, input, OnInit, TemplateRef, viewChildren} from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {TaskComponent} from "../task/task.component";
import {task} from '../models/task';
import {NgTemplateOutlet} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {TaskDirective} from '../directives/task.directive';

@Component({
  selector: 'app-task-list',
  imports: [
    MatProgressBar,
    TaskComponent,
    NgTemplateOutlet,
    TaskDirective,
    MatButton
  ],

  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements AfterViewInit, OnInit {
  readonly tasks = input.required<task[]>();
  readonly directives = viewChildren(TaskDirective);

  selectedTemplate: TemplateRef<any> | null = null;
  selectedTask?: string;

  progress: number = 0;
  totalTasks: number = 0;

  ngOnInit() {
    this.totalTasks = this.tasks().reduce((sum, task) => sum + task.subTasks, 0);
  }

  ngAfterViewInit() {
    // this.directives().forEach((directive, index) => {
    //   console.log(`Template: ${directive.id()}`);
    // });
  }

  calculateProgress(total: number, completed: number): number {
    if (total === 0) {
      return 0; // Avoid division by zero
    }

    const progress = (completed / total) * 100;
    return parseFloat(progress.toFixed(2));
  }

  completeTask(id: string) {
    console.log(`Complete task: ${id}`);
    const task = this.tasks().find(task => task.id === id);
    if (task) {
      task.completed = true;

      const completedTasks = this.tasks().filter(t => t.completed).reduce((sum, task) => sum + task.subTasks, 0);
      this.progress = this.calculateProgress(this.totalTasks, completedTasks);

      console.log(`Total Tasks -> ${this.totalTasks}`);
      console.log(`Completed Tasks -> ${completedTasks}`);
    }
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
