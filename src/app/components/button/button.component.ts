import {
    Component,
    Input,
    OnChanges,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import classnames from 'classnames';

export enum buttonType {
    OUTLINE = 'outline',
    TEXT = 'text',
    CLASSIC = 'classic',
    CLASSIC_ICON = 'classic-icon',
    OUTLINE_ICON = 'outline-icon',
    TEXT_ICON = 'text-icon',
}

@Component({
    selector: 'cp-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit, OnChanges {
    @Input() type?:
        | 'outline'
        | 'text'
        | 'classic'
        | 'classic-icon'
        | 'outline-icon'
        | 'text-icon';
    @Input() disabled?: boolean = false;
    @Input() size?: 'lg' | 'sm';
    @Input() className?: string | string[];
    @Input() fullWidth?: boolean;

    cn: string = 'btn';

    constructor() {}

    ngOnInit(): void {
        this.cn = classnames('btn', this.className, this.type, this.size, {
            'full-width': this.fullWidth,
        });
    }

    ngOnChanges(): void {
        this.cn = classnames('btn', this.className, this.type, this.size, {
            'full-width': this.fullWidth,
        });
    }
}
