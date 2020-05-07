import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TasksModule } from './components/tasks/tasks..module';
import {ServiceModule} from './services/service.module';
import { GifServicesModule } from './services/gifServices/gif-services/gif-services.module'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GifsModule } from './components/gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AuthModule } from './components/Auth/auth/auth.module'; 



@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    TasksModule,
    AuthModule,
    SharedModule,
    ServiceModule,
    AppRoutingModule,
    AngularFontAwesomeModule, 
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    GifServicesModule, 
    GifsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
