import {TemplateRef} from '@angular/core';

export interface task {
  id: string,
  title: string;
  completed: boolean;
  targetCompletionDate?: Date,
  completionDate?: Date,
  subTasks: number;
  template: TemplateRef<any> | undefined;
}
