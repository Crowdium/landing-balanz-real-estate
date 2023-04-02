import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faq } from 'src/app/constants/faq';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
    faq = faq;

    signIn: string =
        'https://clientes.balanz.com/?utm_source=landingcrowdium&utm_medium=cta&utm_campaign=home';
    signUp: string =
        'https://balanz.com/abrir-cuenta-2.aspx/?utm_source=landingcrowdium&utm_medium=cta&utm_campaign=home';
    constructor() {}

    ngOnInit(): void {}
}
