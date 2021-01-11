import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import animateScrollTo from 'animated-scroll-to';

@Component({
  selector: 'about-ci',
  templateUrl: './about-ci.component.html',
  styleUrls: ['./about-ci.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutCiComponent implements OnInit {

  @Input() buttonCallToAction:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  scrollSpy(id:string){
    animateScrollTo(document.querySelector(id), {
      verticalOffset: -10
    })
  }

}
