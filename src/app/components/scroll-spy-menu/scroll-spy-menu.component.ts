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
    let scrollSpyContainer = document.querySelector('.scroll-spy-container');
    if(60 === scrollSpyContainer.getBoundingClientRect().top){
      this.scrolled = true;
    }else{
      this.scrolled = false;
    }
    /*
    let yi = window.scrollY;
    let yf = window.innerHeight + yi;
    this.ids.map(id => {
      let el = document.querySelector(id);
      if(yi >= el.scrollTop && yf <= el.scrollTop + el.clientHeight){
        console.log(id, 'in View')
      }
    })
    */
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
