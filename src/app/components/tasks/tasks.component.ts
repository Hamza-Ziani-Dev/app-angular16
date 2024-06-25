import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  myTask: Task = {
    label: '',
    complated: false,
  };

  isEditForm : boolean = false

  showForm : boolean = false

  searchTask : string = ''

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTasks().subscribe((task) => {
      this.tasks = task;
    });
  }

  deleteTask(id: any) {
    this.taskService
      .deleteTask(id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((task) => task.id != id))
      );
  }

  addTask() {
    this.taskService.addTask(this.myTask).subscribe((task:any) => {
      this.tasks.push(task);
      this.myTask = {
        label: '',
        complated: false,
      };
      this.showForm = false
    });
  }



  changesComplated(task:any){
    return this.taskService.changesComplated(task.complated,task.id).subscribe(
      ()=>{
        task.complated=!task.complated
      }
    )
  }


  editTask(task:any){
    this.myTask = task
    this.isEditForm = true
  }



  updateTask(){
    this.taskService.updateTask(this.myTask).subscribe(()=>{
      this.myTask = {
        label: '',
        complated: false,
      };
      this.isEditForm = false
    })
  }


  searchTaskList(){
    this.tasks = this.tasks.filter((task)=>task.label.includes(this.searchTask))
  }
}
