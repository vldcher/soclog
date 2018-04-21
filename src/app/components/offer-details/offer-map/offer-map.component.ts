import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-offer-map',
  templateUrl: './offer-map.component.html',
  styleUrls: ['./offer-map.component.scss']
})
export class OfferMapComponent implements OnInit {

  title: 'My first AGM project';
  lat = 50.45466;
  lng = 30.5238;
  // constructor() { }

  ngOnInit() {
  }

}
