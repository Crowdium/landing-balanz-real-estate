import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'porcentage-bar',
  templateUrl: './porcentage-bar.component.html',
  styleUrls: ['./porcentage-bar.component.scss']
})
export class PorcentageBarComponent implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() progress: number;

  constructor() { }

  ngOnInit(): void {
  }

}
