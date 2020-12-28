import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import classnames from 'classnames';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RowComponent implements OnInit {

  @Input() className?: string | string[];
  @Input() noGutters?: boolean;
  @Input() alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  @Input() justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';

  cn: string = 'row';
  constructor() { }

  ngOnInit(): void {
    this.cn = classnames('row', this.className, [
      this.alignItems ? `align-items-${this.alignItems}` : '',
      this.noGutters ? 'no-gutters' : '',
      this.justifyContent ? `justify-content-${this.justifyContent}` : ''
    ])
  }

}
