import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LoginComponent } from './components/header/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarriageComponent } from './components/header/carriage/carriage.component';
import { SignUpComponent } from './components/header/sign-up/sign-up.component';
import { FindRideComponent } from './components/find-ride/find-ride.component';
import { MainHeaderComponent } from './components/find-ride/main-header/main-header.component';
import { SubheaderComponent } from './components/find-ride/subheader/subheader.component';
import { FineRideFormComponent } from './components/find-ride/fine-ride-form/fine-ride-form.component';
import { RideOfferComponent } from './components/ride-offer/ride-offer.component';
import { OfferDetailsComponent } from './components/offer-details/offer-details.component';
import { HomeComponent } from './components/home/home.component';
import { OfferProgressLineComponent } from './components/offer-details/offer-progress-line/offer-progress-line.component';
import { OfferDescriptionComponent } from './components/offer-details/offer-description/offer-description.component';
import { OfferMapComponent } from './components/offer-details/offer-map/offer-map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    FooterComponent,
    CarriageComponent,
    SignUpComponent,
    FindRideComponent,
    MainHeaderComponent,
    SubheaderComponent,
    FineRideFormComponent,
    RideOfferComponent,
    OfferDetailsComponent,
    HomeComponent,
    OfferProgressLineComponent,
    OfferDescriptionComponent,
    OfferMapComponent,
    DashboardComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMwof2kUaCcA944HOuQ-dkYyU_IoOvI_Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

