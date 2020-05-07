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

  userInfo = {
    name: 'Elrophi',
    class: 'MC28',
    sex: 'male',
    role: 'Technical mentor'
  };

  constructor(
    private  service: TaskService
  ) {
   }

  ngOnInit() {
    this.userInfo;
    this.tasks = this.service.getTasks();
    this.numberOfTasks = this.service.getLength();
  }

  getTask(tag) {
    console.log(tag, 'child property')
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
    // console.log(item, 'item');
    const newTask = {
      id: this.getCurrentId(),
      name: item.name,
      tags: this.generateTags(item.tag),
      done: false
    }
    return this.service.addNewTask(newTask);
}



}
