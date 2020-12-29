import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-money',
  templateUrl: './icon-money.component.html',
  styleUrls: ['./icon-money.component.scss']
})
export class IconMoneyComponent implements OnInit {

  @Input() className?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
