import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { config } from '../constants/config';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
    DollarCircleFill,
    SignalFill,
    FundFill,
    ClockCircleFill,
    PieChartFill,
    ProjectFill,
    HomeFill,
    ProfileFill,
    BankFill,
} from '@ant-design/icons-angular/icons';

import { ComponentsModule } from '../components/components.module';
import { AssetsModule } from '../assets/assets.module';
import { PipesModule } from '../pipes/pipes.module';

import { AboutCiComponent } from './about-ci/about-ci.component';
import { AsInvestmentComponent } from './as-investment/as-investment.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { FromYourMobileComponent } from './from-your-mobile/from-your-mobile.component';
import { HeaderComponent } from './header/header.component';
import { InvestInRealEstateComponent } from './invest-in-real-estate/invest-in-real-estate.component';
import { InvestmentsComponent } from './investments/investments.component';
import { LegalComponent } from './legal/legal.component';
import { PartnersComponent } from './partners/partners.component';
import { WhyRealEstateComponent } from './why-real-estate/why-real-estate.component';
import { ChartRealEstateComponent } from './chart-real-estate/chart-real-estate.component';
import { GalleryMapComponent } from './gallery-map/gallery-map.component';
import { ResumeInvestmentComponent } from './resume-investment/resume-investment.component';
import { DescriptionProjectComponent } from './description-project/description-project.component';
import { TimelineProjectComponent } from './timeline-project/timeline-project.component';
import { ResponsibleProjectComponent } from './responsible-project/responsible-project.component';
import { FaqProjectComponent } from './faq-project/faq-project.component';
import { VideoProjectComponent } from './video-project/video-project.component';
import { RouterModule } from '@angular/router';

const icons: IconDefinition[] = [
    DollarCircleFill,
    SignalFill,
    FundFill,
    ClockCircleFill,
    PieChartFill,
    ProjectFill,
    HomeFill,
    ProfileFill,
    BankFill,
];

@NgModule({
    declarations: [
        AboutCiComponent,
        AsInvestmentComponent,
        FaqComponent,
        FooterComponent,
        FromYourMobileComponent,
        HeaderComponent,
        InvestInRealEstateComponent,
        InvestmentsComponent,
        LegalComponent,
        PartnersComponent,
        WhyRealEstateComponent,
        ChartRealEstateComponent,
        GalleryMapComponent,
        ResumeInvestmentComponent,
        DescriptionProjectComponent,
        TimelineProjectComponent,
        ResponsibleProjectComponent,
        FaqProjectComponent,
        VideoProjectComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        FontAwesomeModule,
        AssetsModule,
        PipesModule,
        HttpClientModule,
        NzIconModule.forRoot(icons),
        AgmCoreModule.forRoot({ apiKey: config.GMAPS }),
        RouterModule,
    ],
    exports: [
        AboutCiComponent,
        AsInvestmentComponent,
        FaqComponent,
        FooterComponent,
        FromYourMobileComponent,
        HeaderComponent,
        InvestInRealEstateComponent,
        InvestmentsComponent,
        LegalComponent,
        PartnersComponent,
        WhyRealEstateComponent,
        ChartRealEstateComponent,
        GalleryMapComponent,
        ResumeInvestmentComponent,
        DescriptionProjectComponent,
        TimelineProjectComponent,
        ResponsibleProjectComponent,
        FaqProjectComponent,
        VideoProjectComponent,
    ],
})
export class ContainersModule {}
