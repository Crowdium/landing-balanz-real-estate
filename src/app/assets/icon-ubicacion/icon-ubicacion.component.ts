import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-ubicacion',
  templateUrl: './icon-ubicacion.component.html',
  styleUrls: ['./icon-ubicacion.component.scss']
})
export class IconUbicacionComponent implements OnInit {

  @Input() className?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
