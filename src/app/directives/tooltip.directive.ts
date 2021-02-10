import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input('tooltip') tooltipTitle: string;
  @Input() placement: string = "top";
  @Input() delay: number = 500;
  @Input() scrollTop:number = 0;
  tooltip: HTMLElement;

  
  offset = 10;

  container;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter', ['$event']) onMouseEnter($event) {
    $event.stopPropagation();
    if (!this.tooltip) { this.show(); }
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave($event) {
    $event.stopPropagation();
    if (this.tooltip) { this.hide(); }
  }

  show() {
    this.container = this.el.nativeElement;
    this.create();
    this.renderer.addClass(this.tooltip, 'show');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'show');
    window.setTimeout(() => {
      this.renderer.removeChild(this.container, this.tooltip);
      this.tooltip = null;
    }, this.delay); 
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle)
    );

    this.renderer.appendChild(this.container, this.tooltip);

    this.renderer.addClass(this.tooltip, 'tooltip');

    let yi = this.tooltip.getBoundingClientRect().y;
    /* Implementar luego
    let xi = this.tooltip.getBoundingClientRect().x;
    let yf = this.tooltip.getBoundingClientRect().right;
    let xf = this.tooltip.getBoundingClientRect().bottom;
    */
    
    let placement = this.placement;
    if(yi < this.scrollTop){
      placement = 'bottom';
    }

    this.renderer.addClass(this.tooltip, placement);

    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }
}
