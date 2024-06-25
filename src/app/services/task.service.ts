import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http: HttpClient) { }


  getAllTasks(){
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }
}