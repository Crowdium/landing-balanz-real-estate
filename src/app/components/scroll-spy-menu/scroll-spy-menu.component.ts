import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import animateScrollTo from 'animated-scroll-to'

@Component({
  selector: 'scroll-spy-menu',
  templateUrl: './scroll-spy-menu.component.html',
  styleUrls: ['./scroll-spy-menu.component.scss']
})
export class ScrollSpyMenuComponent implements OnInit {

  @Input() data:string[];

  @Output() onClick = new EventEmitter<number>();

  section:string;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value:string, index:number){
    this.onClick.emit(index);
  }

  scrollTo(id:string){
    this.section = id;
    animateScrollTo(document.querySelector(id), {
      verticalOffset: -120
    })
  }
  


}
