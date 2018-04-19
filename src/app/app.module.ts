import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

