import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[tooltip]',
})
export class TooltipDirective implements OnInit {
    @Input('tooltip') tooltipTitle: string;
    @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
    @Input() delay: number = 250;
    @Input() scrollTop: number = 0;
    tooltip: HTMLElement;
    currentPlacement: 'top' | 'bottom' | 'left' | 'right';

    offset = 10;

    container;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.container = this.el.nativeElement;
        this.create();
    }

    @HostListener('mouseenter', ['$event']) onMouseEnter($event) {
        $event.stopPropagation();
        this.show();
    }

    @HostListener('mouseleave', ['$event']) onMouseLeave($event) {
        $event.stopPropagation();
        this.hide();
    }

    show() {
        this.renderer.removeClass(this.tooltip, this.currentPlacement);
        let yi = this.tooltip.getBoundingClientRect().y;

        this.currentPlacement = this.placement;

        if (yi < this.scrollTop) {
            this.currentPlacement = 'bottom';
        }

        this.renderer.addClass(this.tooltip, this.currentPlacement);
        this.renderer.addClass(this.tooltip, 'show');
    }

    hide() {
        this.renderer.removeClass(this.tooltip, 'show');
    }

    create() {
        this.tooltip = this.renderer.createElement('span');

        this.renderer.appendChild(
            this.tooltip,
            this.renderer.createText(this.tooltipTitle)
        );

        this.renderer.appendChild(this.container, this.tooltip);

        this.renderer.addClass(this.tooltip, 'tooltip');

        this.renderer.setStyle(
            this.tooltip,
            '-webkit-transition',
            `opacity ${this.delay}ms`
        );
        this.renderer.setStyle(
            this.tooltip,
            '-moz-transition',
            `opacity ${this.delay}ms`
        );
        this.renderer.setStyle(
            this.tooltip,
            '-o-transition',
            `opacity ${this.delay}ms`
        );
        this.renderer.setStyle(
            this.tooltip,
            'transition',
            `opacity ${this.delay}ms`
        );
    }
}
