import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../services/taskService/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks;
  numberOfTasks;

  public userInfo = {
    name: 'Kevin',
    class: 'MC28',
    sex: 'male',
    role: 'Technical mentor'
  };
  constructor(
    private  service: TaskService
  ) { }

  ngOnInit() {
    this.tasks = this.service.getTasks();
    this.numberOfTasks = this.service.getLength();
  }

  getTask(tag) {
    return  this.service.filterByTag(tag);
  }


  ngDoCheck() {
    this.tasks = this.service.getTasks();
    this.numberOfTasks = this.service.getLength();
  }

  getCurrentId() {
    return this.service.getLength() + 1;
  }

  generateTags(tag) {
    return tag.split(',');
  }

  addTask(item) {
    const newTask = {
      id: this.getCurrentId(),
      name: item.name,
      tags: this.generateTags(item.tag),
      done: false
    }
    console.log(newTask)
    return this.service.addNewTask(newTask);
  }



}
