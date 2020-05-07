import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';

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

  @Output() taskData = new EventEmitter<TaskData>()
  // @ViewChild('taskForm') formValues

  Task = {
    tag: '',
    name: ''
  };

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.Task, 'task')
    this.taskData.emit(this.Task);
    // this.Task = {name: ' ', tag: ' '};
  }

}
