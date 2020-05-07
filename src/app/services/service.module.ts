import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService} from './taskService/tasks.service';
import {  QuoteServiceService } from './quote-service.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ TaskService, QuoteServiceService ]
})
export class ServiceModule { }
