import {Component, input, output} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {DatePipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [
    MatIcon,
    DatePipe,
    NgClass
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  //readonly ActiveTemplate  = input.required<string>();
  readonly id = input.required<string>();
  readonly title = input.required<string>();
  readonly selected = input<boolean>();
  readonly completed = input<boolean>();
  readonly targetCompletionDate = input<Date>();
  readonly onClick = output<string>();

  select() {
    this.onClick.emit(this.id());
    //console.log(`select: ${this.id()}`);
  }
}
