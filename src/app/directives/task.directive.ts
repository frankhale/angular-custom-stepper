import {Directive, input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[task]'
})
export class TaskDirective {
  readonly id = input.required<string>();

  constructor(public template: TemplateRef<any>) {
  }
}
