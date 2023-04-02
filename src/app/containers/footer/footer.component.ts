import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'ct-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
    Registro: string = 'assets/registro.png';
    DataFiscal: string = 'assets/datafiscal.jpg';
    faFacebookF = faFacebookF;
    faInstagram = faInstagram;
    faLinkedinIn = faLinkedinIn;
    faTwitter = faTwitter;

    constructor() {}

    ngOnInit(): void {}
}
