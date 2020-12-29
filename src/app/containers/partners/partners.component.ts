import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {

  logoCNV:string = '/assets/logo-CNV.png';
  logoBCNA:string = '/assets/logo-BCNA.png';
  logoBYMA:string = '/assets/logo-BYMA.png';
  logoMAE:string = '/assets/logo-MAE.png';
  logoROFEX:string = '/assets/logo-ROFEX.png';
  logoCAFCI:string = '/assets/logo-CAFCI.png';
  logoCADANE:string = '/assets/logo-CADANE.png';
  logoTHOMSONREUTERS:string = '/assets/logo-thomsonreuters.png';
  logoSID:string = '/assets/logo-SID.png';

  constructor() { }

  ngOnInit(): void {
  }

}
