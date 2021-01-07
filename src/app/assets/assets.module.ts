import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconUbicacionComponent } from './icon-ubicacion/icon-ubicacion.component';
import { IconLogoComponent } from './icon-logo/icon-logo.component';
import { IconBarsComponent } from './icon-bars/icon-bars.component';
import { IconDiversifityComponent } from './icon-diversifity/icon-diversifity.component';
import { IconDoughnutComponent } from './icon-doughnut/icon-doughnut.component';
import { IconUserComponent } from './icon-user/icon-user.component';
import { IconInvestmentComponent } from './icon-investment/icon-investment.component';
import { IconMoneyComponent } from './icon-money/icon-money.component';
import { IconOwnerComponent } from './icon-owner/icon-owner.component';
import { IconValueComponent } from './icon-value/icon-value.component';
import { createCustomElement } from '@angular/elements';
import { IconToolsComponent } from './icon-tools/icon-tools.component';
import { IconAcquisitionComponent } from './icon-acquisition/icon-acquisition.component';
import { IconSaleComponent } from './icon-sale/icon-sale.component';
import { IconLoadingComponent } from './icon-loading/icon-loading.component';



@NgModule({
  declarations: [
    IconUbicacionComponent,
    IconLogoComponent,
    IconBarsComponent,
    IconDiversifityComponent,
    IconDoughnutComponent,
    IconUserComponent,
    IconInvestmentComponent,
    IconMoneyComponent,
    IconOwnerComponent,
    IconValueComponent,
    IconToolsComponent,
    IconAcquisitionComponent,
    IconSaleComponent,
    IconLoadingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconUbicacionComponent,
    IconLogoComponent,
    IconBarsComponent,
    IconDiversifityComponent,
    IconDoughnutComponent,
    IconUserComponent,
    IconInvestmentComponent,
    IconMoneyComponent,
    IconOwnerComponent,
    IconValueComponent,
    IconToolsComponent,
    IconAcquisitionComponent,
    IconSaleComponent,
    IconLoadingComponent,
  ],
  entryComponents: [
    IconUserComponent,
    IconValueComponent,
    IconInvestmentComponent,
    IconOwnerComponent,
    IconDiversifityComponent,
    IconDoughnutComponent,
    IconToolsComponent,
    IconAcquisitionComponent,
    IconSaleComponent,
  ]
})
export class AssetsModule {
  constructor(injector: Injector){
    /*header*/
    const userIcon = createCustomElement(IconUserComponent, { injector: injector });
    customElements.define('icon-user', userIcon);

    /*timeline*/
    const iconDoughnut = createCustomElement(IconDoughnutComponent, {injector: injector});
    customElements.define('icon-doughnut', iconDoughnut);
    const iconBars = createCustomElement(IconBarsComponent, { injector: injector });
    customElements.define('icon-bars', iconBars);
    const iconMoney = createCustomElement(IconMoneyComponent, { injector: injector });
    customElements.define('icon-money', iconMoney);
    
    /*why-real-estate*/
    const iconValue = createCustomElement(IconValueComponent, { injector: injector });
    customElements.define('icon-value', iconValue);
    const iconInvestment = createCustomElement(IconInvestmentComponent, { injector: injector });
    customElements.define('icon-investment', iconInvestment);
    const iconOwner = createCustomElement(IconOwnerComponent, { injector: injector });
    customElements.define('icon-owner', iconOwner);
    const iconDiversifity = createCustomElement(IconDiversifityComponent, { injector: injector });
    customElements.define('icon-diversifity', iconDiversifity);

    const iconTools = createCustomElement(IconToolsComponent, { injector: injector });
    customElements.define('icon-tools', iconTools);
    const iconAcquisition = createCustomElement(IconAcquisitionComponent, { injector: injector });
    customElements.define('icon-acquisition', iconAcquisition);
    const iconSale = createCustomElement(IconSaleComponent, { injector: injector });
    customElements.define('icon-sale', iconSale)
  }
}
