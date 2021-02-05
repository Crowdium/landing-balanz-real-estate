import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/constants/project';

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
  @Input() status:{
    Tipo:number;
    Descripcion:string;
  };
  @Input() progress:number;
  @Input() callToAction:string;
  
  constructor() { }

  ngOnInit(): void {
  }
  handleClick(value:string){
    if(this.status.Tipo === 1){
      window.open(value, '_top')    
    }
  }

}
