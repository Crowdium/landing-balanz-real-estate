import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface IGalleryData{
  path:string;
  id:string;
  alt:string;
}

@Component({
  selector: 'cp-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

  @Input() data:IGalleryData[];

  config:OwlOptions;
  constructor() { }

  ngOnInit(): void {
    this.config = {
      items: 1,
      loop: true,
      center: true,
      autoWidth: true,
      autoHeight: false,
  
      startPosition: 0,
      nav:true,
      navText: ['<i class="fas fa-chevron-left"></i>', `<i class="fas fa-chevron-right"></i>`],
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      stagePadding: 20,
      responsive: {
        0:{
          items: 1.2,
          margin: 10,
          nav: false,
          dots: false
        },
        768:{
          items: 1,
          margin: 0,
          nav: true,
          dots: true
        }
      }
      
    };
  }

}
