import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarItems, navbarRight } from 'src/app/constants/navbar';

@Component({
    selector: 'ct-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
    @Input() viewNav: boolean;
    @Input() signIn: string;
    @Input() signUp: string;

    navbarRight: NavbarItems[];
    constructor() {}

    ngOnInit(): void {
        this.navbarRight = navbarRight(this.signIn, this.signUp);
    }
}
