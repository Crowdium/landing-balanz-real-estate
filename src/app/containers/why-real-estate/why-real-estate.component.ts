import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WhyRealEstateData } from 'src/app/constants/whyRealEstate';

@Component({
  selector: 'why-real-estate',
  templateUrl: './why-real-estate.component.html',
  styleUrls: ['./why-real-estate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WhyRealEstateComponent implements OnInit {

  WhyRealEstateData = WhyRealEstateData;

  constructor() { }

  ngOnInit(): void {
  }

}
