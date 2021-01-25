import { ChangeDetectorRef, Component, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faMapMarkerAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
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

  filterForm:FormGroup;

  options = [
    {value: "Abierto", text: "Inversiones Abiertas"},
    {value: "Cerrado", text: "Inversiones Cerradas"},
    {value: "Finalizado", text: "Inversiones Finalizadas"}
  ]

  
  loading:boolean = false;

  constructor( private projectS: ProjectsService, private fb: FormBuilder, private router: Router ) {}

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

  filterSelect(value:string){
    if(this.data && !this.error){
      this.dataFilter = this.data.filter(obj => {
        return obj.Estado.Descripcion === value
      })
    } 
  }

  moreInfo(value:string){
    let newURL = this.router.createUrlTree(['/real-estate/inversiones', value])
    window.open(newURL.toString(), '_blank')
  }

}
