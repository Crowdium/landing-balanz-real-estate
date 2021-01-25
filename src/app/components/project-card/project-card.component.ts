import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/constants/project';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @ViewChildren('cardProfile') ref: QueryList<any>;
  @Input() data: Project;
  @Output() moreInfo = new EventEmitter<string>();

  isColumnProfile:boolean = false;
  faMapMarketAlt = faMapMarkerAlt;

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

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    this.onResize();

    this.cdr.detectChanges();
  }

  handleMoreInfo(value:string){
    this.moreInfo.emit(value);
  }

}
