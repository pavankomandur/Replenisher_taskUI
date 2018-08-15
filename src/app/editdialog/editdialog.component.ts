import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../table/table.model'
import {TableComponent} from '../table/table.component'
import {ProductService} from '../product.service'
@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {
  @Input()
  display: boolean
  @Input()
  task: Task;
  constructor(private tableComponent: TableComponent, private productService: ProductService) { }
  ngOnInit() {
  }
  editTask () {
    this.productService.editTasks(this.task).then(tasks =>{
        this.getAllTasks();
      console.log(this.task);
     
      }
    );

  }
  closeTask(){
    console.log(this.task);
    this.task = {}
      this.display=false;
      this.tableComponent.showDialogEdit = false;
  }
  getAllTasks() {
    this.productService.getAllTasks().then(tasks =>{
      console.log(tasks);
      this.tableComponent.tasks = tasks;
      this.display=false;
      this.tableComponent.showDialogEdit = false;
    })
  }
}
