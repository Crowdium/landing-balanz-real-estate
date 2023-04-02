import { Component, OnInit } from '@angular/core';
import { ICollapseMenuData } from 'src/app/components/collapse-menu/collapse-menu.component';
import { IGalleryData } from 'src/app/components/gallery/gallery.component';
import { ITimeline } from 'src/app/components/timeline/timeline.component';
import { Project } from 'src/app/constants/project';
import {
    descriptionData,
    faqHUB,
    galleryData,
    responsibleData,
    resumeList,
    scrollSpyMenu,
    timelineProjectData,
} from 'src/app/constants/vista-belgrano';
import { IResume } from 'src/app/containers/resume-investment/resume-investment.component';

@Component({
    selector: 'mock-vista-belgrano',
    templateUrl: './vista-belgrano.mock.html',
    styleUrls: ['./vista-belgrano.mock.scss'],
})
export class VistaBelgranoMock implements OnInit {
    data: Project;
    error: boolean;
    loading: boolean = true;

    scrollSpyMenu = scrollSpyMenu;

    galleryData: IGalleryData[] = galleryData;
    resumeList: IResume[] = resumeList;
    descriptionData: string = descriptionData;
    timelineProjectData: ITimeline[] = timelineProjectData;
    responsibleData = responsibleData;
    faqProject: ICollapseMenuData[] = faqHUB;

    signIn: string =
        'https://clientes.balanz.com/?utm_source=landingcrowdium&utm_medium=cta&utm_campaign=vista-belgrano';
    signUp: string =
        'https://balanz.com/abrir-cuenta-2.aspx/?utm_source=landingcrowdium&utm_medium=cta&utm_campaign=vista-belgrano';

    constructor() {}

    ngOnInit(): void {}

    handleInvestment(value: string) {
        if (this.data.Estado.Tipo === 1) {
            window.open(value, '_top');
        }
    }
}
