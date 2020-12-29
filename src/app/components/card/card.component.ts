import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
