import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { } from '@types/googlemaps';






let mapOptions = {
  zoom: 4,
  center: {
    lat: 40,
    lng: 40
  }
};



@Component({
  selector: 'app-offer-description',
  templateUrl: './offer-description.component.html',
  styleUrls: ['./offer-description.component.scss']
})
export class OfferDescriptionComponent implements OnInit, AfterViewInit {
  @ViewChild('toInput') toInput: ElementRef;
  @ViewChild('fromInput') fromInput: ElementRef;
  @ViewChild('map') map: ElementRef;
  @ViewChild('wayPoint') waipointInput: ElementRef;

  private googleMap : google.maps.Map;
  private directionsService : google.maps.DirectionsService;
  private originAutocomplete : google.maps.places.Autocomplete;
  private destinationAutocomplete : google.maps.places.Autocomplete;
  private waypointAutocomplete : google.maps.places.Autocomplete;  
  private directionsRequest : google.maps.DirectionsRequest = {};
  private directionsRenderer : google.maps.DirectionsRenderer;

  private origin : string;
  private destination : string; 


  public wayPoints : google.maps.DirectionsWaypoint[];
  public distance : number;

  constructor(private ref: ChangeDetectorRef) {
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.wayPoints = new Array<google.maps.DirectionsWaypoint>();
    this.directionsService = new google.maps.DirectionsService();
    this.distance = 0;
  }

  ngOnInit() {}

  initMap(){
    this.googleMap = new google.maps.Map(
      this.map.nativeElement, {
        ...mapOptions
      }
    );
  }

  setUpDirectionsRequest(){
    this.directionsRequest.travelMode = google.maps.TravelMode.DRIVING;
    this.directionsRequest.origin = this.origin;
    this.directionsRequest.destination = this.destination;
    this.directionsRequest.waypoints = this.wayPoints;
  }

  renderRoute(){
    this.setUpDirectionsRequest();
    this.directionsService.route(
      this.directionsRequest,
      (result,status) => {
        console.log(result);
        this.directionsRenderer.setDirections(result);
        this.calculateResponseDistance(result.routes[0].legs);
      }
    )
  }

  ngAfterViewInit(){
    this.initMap();

    this.directionsService;
    this.directionsRenderer.setMap(this.googleMap);

    this.originAutocomplete = new google.maps.places.Autocomplete(this.fromInput.nativeElement);
    this.destinationAutocomplete = new google.maps.places.Autocomplete(this.toInput.nativeElement);
    this.waypointAutocomplete = new google.maps.places.Autocomplete(this.waipointInput.nativeElement);
    

    this.originAutocomplete.addListener('place_changed', ()=>{
      this.origin = this.originAutocomplete.getPlace().formatted_address;
      if(this.destination){
        this.renderRoute();      
      }
    });
    
    this.destinationAutocomplete.addListener('place_changed', () => {
      this.destination = this.destinationAutocomplete.getPlace().formatted_address;

      if(this.origin){
        this.renderRoute();      
      }
    });

    this.waypointAutocomplete.addListener('place_changed', ()=> {
      this.wayPoints.push({
        location: this.waypointAutocomplete.getPlace().formatted_address,
        stopover: true
      });
      if(this.origin&&this.destination){
        this.renderRoute();
      }
      this.ref.detectChanges();
    });
  }

  deleteWayPoint(point){ 
    this.wayPoints = this.wayPoints.filter(
      el => el.location!==point.location
    );
    this.ref.detectChanges();
  }

  calculateResponseDistance(points){
    var distance = 0;
    points.forEach(e => {
      distance+=e.distance.value;
    });
    this.distance = distance;
    this.ref.detectChanges();
  }
}
