import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService} from './taskService/tasks.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ TaskService ]
})
export class ServiceModule { }
