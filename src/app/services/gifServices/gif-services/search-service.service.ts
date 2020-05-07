import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { httpify } from 'caseless';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  http
  searchGifUrl = `${environment.gifUrl}/search`;
  stickersUrl =  `${environment.stickerUrl}/search`;
  apiKey = `${environment.YOUR_API_KEY}`
  limit = 5
  constructor( http: HttpClient) { }
  //javascript, jQuery

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

  searchGifs(searchValue){
    return this.http.get(`${this.searchGifUrl}?q=${searchValue}&${this.apiKey}&limit=${this.limit}}`)
  }


}
