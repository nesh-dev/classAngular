import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { GifsRoutingModule } from './gifs-routing.module';
import { GifsComponent } from './gifs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GifServicesModule } from 'src/app/services/gifServices/gif-services/gif-services.module';
import { TrendingService } from 'src/app/services/gifServices/gif-services/trending.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';



@NgModule({
  declarations: [
      GifsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularFontAwesomeModule,
    NgProgressHttpClientModule,
    FormsModule, 
    GifsRoutingModule,
    GifServicesModule
  ],
  exports: [GifsComponent],
  providers: [
    TrendingService
  ]
})
export class GifsModule { }
