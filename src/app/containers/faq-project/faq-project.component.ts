import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ICollapseMenuData } from 'src/app/components/collapse-menu/collapse-menu.component';
import { faq } from 'src/app/constants/faq';

@Component({
  selector: 'faq-project',
  templateUrl: './faq-project.component.html',
  styleUrls: ['./faq-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqProjectComponent implements OnInit {

  faq: ICollapseMenuData[];
  constructor() { }

  ngOnInit(): void {
    this.faq = faq
  }

}
