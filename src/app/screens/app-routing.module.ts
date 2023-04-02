import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HubCabildoIiScreen } from './hub-cabildo-ii/hub-cabildo-ii.screen';
import { HubProjectComponent } from './hub-project/hub-project.component';
import { InvestmentsScreensComponent } from './investments/investments.component';
import { VistaBelgranoMock } from './mock-screen/vista-belgrano/vista-belgrano.mock';
import { NotFoundComponent } from './not-found/not-found.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { VistaBelgranoScreen } from './vista-belgrano/vista-belgrano.screen';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'real-estate',
        children: [
            { path: '', component: RealEstateComponent },
            { path: 'inversiones', component: InvestmentsScreensComponent },
            { path: 'inversiones/hub-cabildo', component: HubProjectComponent },
            { path: 'inversiones/hub-cabildo2', component: HubCabildoIiScreen },
            {
                path: 'inversiones/vista-belgrano',
                component: VistaBelgranoScreen,
            },
        ],
    },
    {
        path: 'dev',
        children: [{ path: 'vista-belgrano', component: VistaBelgranoMock }],
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
