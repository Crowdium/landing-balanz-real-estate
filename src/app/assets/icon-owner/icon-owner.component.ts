import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-owner',
  templateUrl: './icon-owner.component.html',
  styleUrls: ['./icon-owner.component.scss']
})
export class IconOwnerComponent implements OnInit {

  @Input() className:string;

  constructor() { }

  ngOnInit(): void {
  }

}
