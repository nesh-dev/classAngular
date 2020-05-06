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
  tag = 'important';

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
    this.tag = tag;
    const filtered  = this.service.filterByTag(tag);
    this.tasks = filtered;
    return this.tasks;
  }

  ngDoCheck() {
    this.tasks = this.service.getTasks();
    this.getTask(this.tag);
  }



}
