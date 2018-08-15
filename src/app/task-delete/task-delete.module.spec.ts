import { TaskDeleteModule } from './task-delete.module';

describe('TaskDeleteModule', () => {
  let taskDeleteModule: TaskDeleteModule;

  beforeEach(() => {
    taskDeleteModule = new TaskDeleteModule();
  });

  it('should create an instance', () => {
    expect(taskDeleteModule).toBeTruthy();
  });
});
