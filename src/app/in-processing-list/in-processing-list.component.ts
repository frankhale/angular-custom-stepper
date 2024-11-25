import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-in-processing-list',
  imports: [
    MatIcon,
    MatProgressBar
  ],
  templateUrl: './in-processing-list.component.html',
  styleUrl: './in-processing-list.component.scss'
})
export class InProcessingListComponent {

}
