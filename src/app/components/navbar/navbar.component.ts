import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import classnames from 'classnames';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {

  @Input() position: 'top' | 'bottom';

  cn:string = 'navbar';
  constructor() { }

  ngOnInit(): void {
    this.cn = classnames('navbar', this.position);
  }

}
