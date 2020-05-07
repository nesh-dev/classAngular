import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface TaskData {
  name: string;
  tag: string;
}

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent implements OnInit {

  @Output() addTask = new EventEmitter<TaskData>();
  Task = {
    name: '',
    tag: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.addTask.emit(this.Task);
  }

}
