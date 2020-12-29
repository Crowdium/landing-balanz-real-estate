import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarItems, navbarRight } from 'src/app/constants/navbar';

@Component({
  selector: 'ct-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  navbarRight:NavbarItems[];
  constructor() { }

  ngOnInit(): void {
    this.navbarRight = navbarRight;
  }

}
