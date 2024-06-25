import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks : Task[] = [];
  constructor(private taskService : TaskService){}
 ngOnInit(): void {
this.getTasks();  
 }

  getTasks(){
    this.taskService.getAllTasks().subscribe((task)=>{
      this.tasks = task
    });
    console.log('====================================');
    console.log(this.tasks);
    console.log('====================================');
  }

}
