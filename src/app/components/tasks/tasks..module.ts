import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/taskService/tasks.service';
import { TaskRoutingModule } from './tasks.routing.module';
import { TasksComponent } from './tasks.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TagsComponent } from '../tags/tags.component';
import { TaskCreatorComponent } from '../task-creator/task-creator.component';
import { StrikeThroughDirective } from './../strike-through.directive';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
      TasksComponent,
      TagsComponent,
      StrikeThroughDirective,
      TaskCreatorComponent
  ],
  exports: [TasksComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    AngularFontAwesomeModule,
    FormsModule, 
    SharedModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
