import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../table/table.model'
import {TableComponent} from '../table/table.component'
import {ProductService} from '../product.service'
@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {
  @Input()
  display: boolean
  @Input()
  task: Task[];
  constructor(private tableComponent: TableComponent,  private productService: ProductService) { }

  ngOnInit() {
  }
  deleteTask () {
    this.productService.deleteTasks(this.task).then(tasks =>{
        this.getAllTasks();
      console.log(this.task);
      this.display=false;
      this.tableComponent.showDialogDelete = false;
      }
    );

  }
  closeTask(){
    console.log(this.task);
    this.task = []
      this.display=false;
      this.tableComponent.showDialogDelete = false;
  }

  getAllTasks() {
    this.productService.getAllTasks().then(tasks =>{
      console.log(tasks);
      this.tableComponent.tasks = tasks
    })
  }
}
