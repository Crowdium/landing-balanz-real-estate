import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'description-project',
  templateUrl: './description-project.component.html',
  styleUrls: ['./description-project.component.scss']
})
export class DescriptionProjectComponent implements OnInit {
  
  @Input() description:string;

  constructor() { }

  ngOnInit(): void {
  }

}
