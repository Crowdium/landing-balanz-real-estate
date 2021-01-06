import { ChangeDetectorRef, Component, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faMapMarkedAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/constants/project';
import { encodeURL } from 'src/app/helpers/encodeURI';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsScreensComponent implements OnInit {

  @ViewChildren('cardProfile') ref: QueryList<any>;

  data:Project[] = [];
  error:boolean = false;
  dataFilter;

  isColumnProfile:boolean = false;

  filterForm:FormGroup;

  options = [
    {value: "Abierto", text: "Inversiones Abiertas"},
    {value: "Cerrado", text: "Inversiones Cerradas"},
    {value: "Finalizado", text: "Inversiones Finalizadas"}
  ]

  faMapMarkerAlt = faMapMarkedAlt;
  faSpinner = faSpinner;
  
  loading:boolean = false;
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

  constructor( private projectS: ProjectsService, private cdr: ChangeDetectorRef, private fb: FormBuilder, private router: Router ) {}

  ngOnInit(): void {
    this.loading = true;
    this.projectS.getProjects().subscribe(data => {
      this.data = data;
      this.error = false;
      this.loading = false;
      this.filterSelect(this.filterForm.value.status);
    }, err => {
      this.data = err;
      this.error = true;
      this.loading = false;
    })

    this.filterForm = this.fb.group({
      status:[this.options[0].value, [Validators.required]]
    });
    
    this.filterForm.get('status').valueChanges.subscribe(v => this.filterSelect(v));

  }

  ngAfterViewChecked(){
    this.onResize();

    this.cdr.detectChanges();
  }

  filterSelect(value:string){
    if(this.data && !this.error){
      this.dataFilter = this.data.filter(obj => {
        return obj.Estado.Descripcion === value
      })
    } 
  }

  moreInfo(value:string){
    let url = encodeURL(value);
    this.router.navigateByUrl(`/real-estate/inversiones/${url}`)
  }

}
