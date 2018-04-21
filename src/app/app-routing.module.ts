import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'offer-details', component: OfferDetailsComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
