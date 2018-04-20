import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-offer-map',
  templateUrl: './offer-map.component.html',
  styleUrls: ['./offer-map.component.scss']
})
export class OfferMapComponent implements OnInit {

  title: 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  locationChosen = false;

  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
