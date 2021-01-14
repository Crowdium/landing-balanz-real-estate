import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faq } from 'src/app/constants/faq';

@Component({
  selector: 'real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RealEstateComponent implements OnInit {

  faq = faq;

  constructor() { }

  ngOnInit(): void {
  }

}
