import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-logo',
  templateUrl: './icon-logo.component.html',
  styleUrls: ['./icon-logo.component.scss']
})
export class IconLogoComponent implements OnInit {

  @Input() width:number = 138;
  @Input() className:string;

  height:number;
  scale:number = (25 * 100) / 138;

  constructor() { }

  ngOnInit(): void {
    this.height = (this.scale * this.width) / 100;
  }

}
