import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-diversifity',
  templateUrl: './icon-diversifity.component.html',
  styleUrls: ['./icon-diversifity.component.scss']
})
export class IconDiversifityComponent implements OnInit {

  @Input() className:string;

  constructor() { }

  ngOnInit(): void {
  }

}
