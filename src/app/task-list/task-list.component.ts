import { Component } from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
  selector: 'app-task-list',
    imports: [
        MatProgressBar
    ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

}
