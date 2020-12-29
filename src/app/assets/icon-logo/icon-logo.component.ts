import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-logo',
  templateUrl: './icon-logo.component.html',
  styleUrls: ['./icon-logo.component.scss']
})
export class IconLogoComponent implements OnInit {

  @Input() className:string;

  constructor() { }

  ngOnInit(): void {
  }

}
