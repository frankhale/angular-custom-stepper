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
  readonly started = input.required<boolean>();
  readonly completed = input<boolean>();
  readonly targetCompletionDate = input<Date>();
  readonly disabled = input<boolean>(false);
  readonly onClick = output<string>();

  // icon (circle with minus inside it) is called `do_not_disturb_on`
  // icon (in progress) is called `pending_actions`
  // icon (completed) is called `check_circle`

  select() {
    this.onClick.emit(this.id());
    //console.log(`select: ${this.id()}`);
  }
}
