import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from '../components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    ChartRealEstateComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FontAwesomeModule,
    AssetsModule,
    PipesModule,
    HttpClientModule,
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
    ChartRealEstateComponent
  ],
})
export class ContainersModule {

}
