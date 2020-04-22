import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <p>From Google Earth, select a location on the map by simply left-mouse clicking. A gray icon will appear at the exact location. Click this icon again and a blue icon will appear with the exact negative and positive of the location.</p>

<div>
    Input Latitude: <input type="number" ng-bind="lat" value="{{latitude}}"/>
</div>
<div>
    Input Longitude: <input type="number" ng-bind="lng" value="{{longitude}}"/>
</div>
<div>
    <button (click)="mapInitializer()">View Location</button>
</div>

<div #mapContainer id="map"></div>
  `
})

export class HomeComponent {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  @Input() longitude: string;
  @Input() latitude: string;

  title = 'angular-gmap';
  map: google.maps.Map;
  pegs: google.maps.Marker[] = [];

  lat = 41.1889614;
  lng = -112.0896354;

  lat1 = 49.19;
  lng1 = -109.0896354;

  coordinates = new google.maps.LatLng(this.lat, this.lng);
  coordinates1 = new google.maps.LatLng(this.lat1, this.lng1);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
  });

  marker1 = new google.maps.Marker({
    position: this.coordinates1,
  });

  public addLocation(latitude, longitude) {
    var mk = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: this.map
    });
    this.pegs.push(mk);
  }

  onClick() {
    alert('location added');
  }

  mapInitializer() {
    this.map = new google.maps.Map(
      this.gmap.nativeElement,
      this.mapOptions
    );
    this.marker.setMap(this.map);
    this.marker1.setMap(this.map);
   }

   ngAfterViewInit() {
    this.mapInitializer();
  }

}
