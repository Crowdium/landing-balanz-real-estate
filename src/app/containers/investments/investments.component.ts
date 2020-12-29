import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/constants/project';

@Component({
  selector: 'investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {

  data:Project[] = [];
  error:boolean = false;

  faMapMarkerAlt = faMapMarkedAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
