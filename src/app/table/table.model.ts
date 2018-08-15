export interface Task {
  taskId?;
  name?;
  taskStatus?;
  taskPriority?;
  description?;
  note?;
  feedback?;
  estimatedTimeOfFinish?;
  assignedUserId?;
  reportedUserId?;
  estimatedDuration?;
  checked?: boolean;
  targetAssignee?;
  }
