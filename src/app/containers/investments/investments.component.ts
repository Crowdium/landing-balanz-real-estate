import {  AfterViewChecked, ChangeDetectorRef, Component, HostListener, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/constants/project';
import { encodeURL } from 'src/app/helpers/encodeURI';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InvestmentsComponent implements OnInit, AfterViewChecked {

  @ViewChildren('cardProfile') ref: QueryList<any>;

  data:Project[] = [];
  error:boolean = false;

  isColumnProfile:boolean = false;

  faMapMarkerAlt = faMapMarkerAlt;

  @HostListener('window:resize', ['$event'])
  onResize(ev?:any){
    if(this.ref.length > 0){
      let rect = this.ref.first.nativeElement.getBoundingClientRect();
      let isColumn = rect.width < 300 ? true : false;

      if(this.isColumnProfile !== isColumn){
        this.isColumnProfile = isColumn;
      }
    }
  }

  constructor( private projectS: ProjectsService, private cdr: ChangeDetectorRef, private router: Router ) { }

  ngOnInit(): void {
    this.projectS.getProjects().subscribe(data => {
      this.data = data;
      this.error = false;
    }, err => {
      this.data = err;
      this.error = true
    })
  }
  ngAfterViewChecked(){
    this.onResize()
    this.cdr.detectChanges();
  }

  moreInfo(value:string){
    let url = encodeURL(value);
    this.router.navigateByUrl(`/real-estate/inversiones/${url}`)
  }
}
