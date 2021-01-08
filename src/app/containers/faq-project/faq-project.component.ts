import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ICollapseMenuData } from 'src/app/components/collapse-menu/collapse-menu.component';

@Component({
  selector: 'faq-project',
  templateUrl: './faq-project.component.html',
  styleUrls: ['./faq-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqProjectComponent implements OnInit {

  @Input() data: ICollapseMenuData[];
  constructor() { }

  ngOnInit(): void {
  }

}
