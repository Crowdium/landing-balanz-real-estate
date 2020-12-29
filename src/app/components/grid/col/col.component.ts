import { Component, Input, OnInit } from '@angular/core';
import classnames from 'classnames';

@Component({
  selector: 'grid-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss']
})
export class ColComponent implements OnInit {

  @Input() className?: string | string[];
  @Input() alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'auto'
  @Input() xs?: number | string;
  @Input() sm?: number | string;
  @Input() md?: number | string;
  @Input() lg?: number | string;
  @Input() xl?: number | string;

  cn:string = 'col';
  constructor() { }

  ngOnInit(): void {
    this.cn = classnames('col', this.className, [
      this.alignSelf ? `align-self-${this.alignSelf}` : '',
      this.xs ? `xs-${this.xs}` : '',
      this.sm ? `sm-${this.sm}` : '',
      this.md ? `md-${this.md}` : '',
      this.lg ? `lg-${this.lg}` : '',
      this.xl ? `xl-${this.xl}` : '',
  ])
  }

}
