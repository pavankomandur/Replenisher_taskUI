import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Task} from './table/table.model'


@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getAllTasks() {
        return this.http.get<any>('../assets/getAllTasks.json')
        .toPromise()
        .then(res => {return res})
       ;
}
  createTasks(task: Task) {
    return this.http.get<any>('http://localhost:9090/replenisher/tasks/getAllTasks')
      .toPromise()
      .then(res => {return res})
  }
  editTasks(task: Task) {
    return this.http.get<any>('http://localhost:9090/replenisher/tasks/getAllTasks')
      .toPromise()
      .then(res => {return res})
  }
  deleteTasks(task:any) {
    return this.http.get<any>('http://localhost:9090/replenisher/tasks/getAllTasks')
      .toPromise()
      .then(res => {return res})
  }
  getTask() {
    return this.http.get<any>('http://localhost:9090/replenisher/tasks/getAllTasks')
      .toPromise()
      .then(res => {return res})
  }

  createRecurringTasks(task: Task) {
    return this.http.get<any>('http://localhost:9090/replenisher/tasks/getAllTasks')
    .toPromise()
    .then(res => {return res})
  }
  getAssignedToList() {
    return this.http.get<any>('http://localhost:9090/replenisher/tasks/getAllTasks')
    .toPromise()
    .then(res => {return res})
  }
}
