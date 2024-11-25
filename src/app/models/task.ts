export interface task {
  id: string,
  title: string;
  completed: boolean;
  targetCompletionDate?: Date,
  completionDate?: Date
}
