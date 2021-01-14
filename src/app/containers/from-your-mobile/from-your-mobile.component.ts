import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'from-your-mobile',
  templateUrl: './from-your-mobile.component.html',
  styleUrls: ['./from-your-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FromYourMobileComponent implements OnInit {

  @Input() callToAction:string
  CustomizedServicesPlatform:string = "assets/customized-services-platforms.png"

  constructor() { }

  ngOnInit(): void {
  }

}
