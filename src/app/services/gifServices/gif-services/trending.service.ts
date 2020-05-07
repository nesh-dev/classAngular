import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TrendingService {

  trendingGifUrl = `${environment.gifUrl}/trending`;
  searchGifUrl = `${environment.gifUrl}/search`;
  stickersUrl =  `${environment.stickerUrl}/search`;
  apiKey = `${environment.YOUR_API_KEY}`
  limit = 5;
  finalUrl = `${this.trendingGifUrl}?api_key=${this.apiKey}&limit=${this.limit}/`;
  constructor( private http: HttpClient) { }
  

  getTrendingGifs(): Observable<any> {
    console.log(this.finalUrl)
    return this.http.get(this.finalUrl)
  }


}
