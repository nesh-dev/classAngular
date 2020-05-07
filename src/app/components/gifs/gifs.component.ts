import { Component, OnInit } from '@angular/core';
import { TrendingService } from './../../services/gifServices/gif-services/trending.service'

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

  gifs;
  loading: boolean = true;

  constructor(private trendingService: TrendingService) { }

  ngOnInit() {
  this.getGifs()
  }

  getImages(response){
  
    let imagesArray = []
    response.forEach(element => {
      imagesArray.push({ 
        title: element.title,
        username: element.username,
        image: element.images.downsized_medium.url})
    });
   
   return imagesArray
  }

  getGifs():void {
    
    this.trendingService.getTrendingGifs().subscribe(
    
      (response) => {
        console.log(response.data) 
        const imageArray = response.data && this.getImages(response.data); 
        this.loading=false;
        this.gifs = imageArray
      }, 

      (error) => {
        this.loading=false;
        console.log(error)
      }
    )
  }
}
