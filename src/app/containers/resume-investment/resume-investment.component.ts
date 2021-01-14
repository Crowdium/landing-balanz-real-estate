import { Component, Input, OnInit } from '@angular/core';

export interface IResume{
  icon: string;
  title: string;
  value: string;
}

@Component({
  selector: 'resume-investment',
  templateUrl: './resume-investment.component.html',
  styleUrls: ['./resume-investment.component.scss']
})
export class ResumeInvestmentComponent implements OnInit {

  @Input() data:IResume[];
  @Input() progress:number;
  @Input() callToAction:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
