import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../table/table.model';
import {TableComponent} from '../table/table.component';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input()
  display: boolean
  task: Task = {};
  constructor(private tableComponent: TableComponent, private productService: ProductService) { }

  ngOnInit() {
  }

  createTask () {
    console.log(this.task);
    this.productService.createTasks(this.task).then(tasks =>{
      this.getAllTasks();
    console.log(this.task);
   
    })
   
  }
closeTask(){
  console.log(this.task);
  this.task = {}
    this.display=false;
    this.tableComponent.showDialogCreate = false;
}
getAllTasks() {
  this.productService.getAllTasks().then(tasks =>{
    console.log(tasks);
    this.tableComponent.tasks = tasks;
    this.display=false;
    this.tableComponent.showDialogCreate = false;
  })
}
}
