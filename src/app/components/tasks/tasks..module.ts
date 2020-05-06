import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/taskService/tasks.service';
import {TaskRoutingModule } from './tasks.routing.module';
import {TasksComponent} from './tasks.component';
import {NavbarComponent} from '../navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {TagsComponent} from '../tags/tags.component';
import { StrikeThroughDirective } from './../strike-through.directive';



@NgModule({
  declarations: [ TasksComponent, NavbarComponent, TagsComponent, StrikeThroughDirective ],
  exports: [ TasksComponent ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    AngularFontAwesomeModule,

  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
