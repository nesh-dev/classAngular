import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
