import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { descriptionData, faqHUB, responsibleData, resumeList, scrollSpyMenu, timelineProjectData, urlVideo } from 'src/app/constants/hub-project';
import { Project } from 'src/app/constants/project';
import { encodeURL } from 'src/app/helpers/encodeURI';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-hub-project',
  templateUrl: './hub-project.component.html',
  styleUrls: ['./hub-project.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HubProjectComponent implements OnInit {

  data:Project;
  error:boolean;
  loading:boolean = true;

  url:string;

  scrollSpyMenu = scrollSpyMenu;
  resumeList = resumeList;
  timelineProjectData = timelineProjectData;
  responsibleData = responsibleData;
  videoProjectData = urlVideo;
  faqProject = faqHUB;


  constructor(private projectS: ProjectsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.paramMap.get('project');
    this.projectS.getProjects().subscribe((data:Project[]) => {
      this.data = data.filter(obj => {
        return encodeURL(obj.Abreviatura) === this.url;
      })[0];
      if(this.data === undefined){
        this.router.navigateByUrl('/404', { skipLocationChange: true})
      }
      this.loading = false;
    }, err => console.log(err))
  }

  getDescription(){
    //return this.data.Descripcion;
    return descriptionData;
  }

}
