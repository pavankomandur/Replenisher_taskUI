import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../table/table.model'
import {TableComponent} from '../table/table.component'
import {ProductService} from '../product.service'

@Component({
  selector: 'app-recurring',
  templateUrl: './recurring.component.html',
  styleUrls: ['./recurring.component.css']
})
export class RecurringComponent implements OnInit {

  @Input()
  display: boolean;
  @Input()
  username: string;
  task: Task = {};
  sourceAssignee: any[];
    
  constructor(private tableComponent: TableComponent, private productService: ProductService) { 
    this.task.reportedUserId = this.username;
    this.task.checked = false;
  }
  ngOnInit() {
    //this.productService.getAssignedToList().then(assigneeList => this.sourceAssignee = assigneeList);
    this.sourceAssignee =  [
      {name: 'User', code: 'user'},
      {name: 'User2', code: 'user2'},
     
  ];
    this.task.targetAssignee = [];
  }
  createRecurringTask () {
    this.productService.createRecurringTasks(this.task).then(tasks =>{
        this.getAllTasks();
      console.log(this.task);
     
      }
    );

  }
  closeTask(){
    console.log(this.task);
    this.task = {};
      this.display=false;
      this.tableComponent.showDialogRecurring = false;
  }
  getAllTasks() {
    this.productService.getAllTasks().then(tasks =>{
      console.log(tasks);
      this.tableComponent.tasks = tasks;
      this.display=false;
      this.tableComponent.showDialogRecurring = false;
    })
  }

}
