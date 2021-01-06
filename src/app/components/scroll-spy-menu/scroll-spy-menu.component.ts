import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import animateScrollTo from 'animated-scroll-to'

@Component({
  selector: 'scroll-spy-menu',
  templateUrl: './scroll-spy-menu.component.html',
  styleUrls: ['./scroll-spy-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollSpyMenuComponent implements OnInit {

  @Input() data:any[];

  @Output() onClick = new EventEmitter<number>();

  section:string;
  scrolled:boolean = false;
  ids:string[];


  @HostListener('window:scroll', ['$event'])
  onScroll(){
    let top = window.scrollY;
    let scrollSpyContainer = document.querySelector('.scroll-spy-container');
    if(60 === scrollSpyContainer.getBoundingClientRect().top){
      this.scrolled = true;
    }else{
      this.scrolled = false;
    }
    this.ids.map(id => {
      let el = document.querySelector(id);
      let rect = el.getBoundingClientRect();
      if(rect.top - 120 <= 0 && rect.top + rect.height - 120 >= 0){
        this.section = id;
      }
      
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.ids = this.data.map(obj => obj.id);
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
