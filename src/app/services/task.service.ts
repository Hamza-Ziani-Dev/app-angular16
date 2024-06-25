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



  deleteTask(id:any){
    return this.http.delete(`http://localhost:3000/tasks/${id}`);
  }

  addTask(task:any){
      return this.http.post<Task[]>(`http://localhost:3000/tasks`,task)
  }


  changesComplated(complated:any,id:any){
    return this.http.patch<Task[]>(`http://localhost:3000/tasks/${id}`,{complated:!complated})

  }


  updateTask(task:any){
    return this.http.put<Task[]>(`http://localhost:3000/tasks/${task.id}`,task)
  }

 
}
