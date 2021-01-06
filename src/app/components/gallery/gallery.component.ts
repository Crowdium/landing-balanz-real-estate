import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

export interface IGalleryData{
  path:string;
}

@Component({
  selector: 'cp-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  @Input() data:IGalleryData[];

  config: Partial<any>

  constructor() { }

  ngOnInit(): void {
    /*
    this.config = {
      items: this.data,
      slideWidth: 100,
      widthMode: CarouselWidthMode.PERCENT,
      alignMode: CarouselAlignMode.LEFT,
      autoplayEnabled: true,
      autoplayDelay: 6000,
      dragEnabled: true,
      transitionDuration: 350,
      shouldRecalculateOnResize: true,
    }
    */
  }

}
