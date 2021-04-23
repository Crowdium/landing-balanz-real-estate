import { Component, Input, OnInit } from '@angular/core';
import { galleryData } from 'src/app/constants/hub-project';

@Component({
  selector: 'gallery-map',
  templateUrl: './gallery-map.component.html',
  styleUrls: ['./gallery-map.component.scss']
})
export class GalleryMapComponent implements OnInit {

  @Input() lat: number;
  @Input() lng: number;
  @Input() data:any;

  selectView: 'gallery' | 'map' = "gallery"; 
  
  constructor() { }

  ngOnInit(): void {
    this.lat = Number(this.lat);
    this.lng = Number(this.lng);
  }

  handleSelectView(value){
    this.selectView = value;
  }

}
