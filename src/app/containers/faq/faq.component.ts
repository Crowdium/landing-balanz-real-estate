import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ICollapseMenuData } from 'src/app/components/collapse-menu/collapse-menu.component';
import { faq } from 'src/app/constants/faq';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements OnInit {

  faq: ICollapseMenuData[];
  constructor() { }

  ngOnInit(): void {
    this.faq = faq
  }

}
