import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HubProjectComponent } from './hub-project/hub-project.component';
import { InvestmentsScreensComponent } from './investments/investments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RealEstateComponent } from './real-estate/real-estate.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'real-estate',
    children: [
      {path: '', component: RealEstateComponent},
      {path: 'inversiones', component: InvestmentsScreensComponent},
      {path: 'inversiones/:project', component: HubProjectComponent},
    ],
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
