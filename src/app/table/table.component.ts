import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {ProductService} from '../product.service'
import {Task} from './table.model'
import { ActivatedRoute } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import {DialogComponent} from '../dialog/dialog.component'
import {EditdialogComponent} from '../editdialog/editdialog.component'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TableComponent implements OnInit {
  tasks: Task[];
  @Output()
  create = new EventEmitter();
  @Output()
  edit = new EventEmitter();
  @Output()
  delete = new EventEmitter();
  cols: any[];
  selectedTask: Task;
  username: string;
  role: string;
  showDialogCreate: boolean;
  showDialogEdit: boolean;
  showDialogDelete: boolean;
  showDialogRecurring: boolean;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showDialogCreate = false;
    this.showDialogEdit = false;
    this.showDialogDelete = false;
 this.getAllTasks();

      this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.username = params['userName'] || '';
        this.role = params['role'] || '';
      });
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'taskStatus', header: 'Status' },
      { field: 'taskPriority', header: 'Priority' },
      { field: 'estimatedTimeOfFinish', header: 'Estimated Time' },

      { field: 'note', header: 'Note' },
      { field: 'feedback', header: 'Feedback' },
      { field: 'assignedUserId', header: 'Assigned To' },
      { field: 'reportedUserId', header: 'Created By' },

  ];
  }
  onRowSelect(event) {
    console.log(this.selectedTask)
}

handleEdit($event) {

this.showDialogEdit = true;

}
handleCreate($event) {
  this.showDialogCreate = true;
}
handleDelete($event) {
  this.showDialogDelete = true;
}


handleRecurringTask($event) {
  this.showDialogRecurring = true;
}

getAllTasks() {

  this.productService.getAllTasks().then(tasks =>{
    console.log(tasks);
    this.tasks = tasks
  })
}
}
