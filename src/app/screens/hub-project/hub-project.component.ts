import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICollapseMenuData } from 'src/app/components/collapse-menu/collapse-menu.component';
import { IGalleryData } from 'src/app/components/gallery/gallery.component';
import { ITimeline } from 'src/app/components/timeline/timeline.component';
import { descriptionData, faqHUB, galleryData, responsibleData, resumeList, scrollSpyMenu, timelineProjectData, urlVideo } from 'src/app/constants/hub-project';
import { Project } from 'src/app/constants/project';
import { IResume } from 'src/app/containers/resume-investment/resume-investment.component';
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

  scrollSpyMenu = scrollSpyMenu;

  galleryData:IGalleryData[] = galleryData;
  resumeList:IResume[] = resumeList;
  descriptionData:string = descriptionData;
  timelineProjectData:ITimeline[] = timelineProjectData;
  videoProjectData:string = urlVideo;
  responsibleData = responsibleData;
  faqProject:ICollapseMenuData[] = faqHUB;

  signIn:string = "https://clientes.balanz.com/?utm_source=landingcrowdium&utm_medium=cta&utm_campaign=hub-cabildo"
  signUp:string = "https://balanz.com/abrir-cuenta-2.aspx/?utm_source=landingcrowdium&utm_medium=cta&utm_campaign=hub-cabildo"

  constructor(private projectS: ProjectsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.projectS.getProjects().subscribe((data:Project[]) => {
      this.data = data.filter(obj => {
        return obj.Slug === 'hub-cabildo';
      })[0];
      if(this.data === undefined){
        this.router.navigateByUrl('/404', { skipLocationChange: true})
      }
      this.loading = false;
    }, err => console.log(err))
  }

  handleInvestment(value:string){
    if(this.data.Estado.Tipo === 1){
      window.open(value, '_top');
    }
  }

}
