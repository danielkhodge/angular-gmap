import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  pageTitle = "Covid-19 Cases";

  title = 'angular-gmap';
  pegs: google.maps.Marker[] = [];
  map: google.maps.Map;

  lat = 41.1889614;
  lng = -112.0896354;

  let

  lat2 = 65.1889614;
  lng2 = -199.0896354;

  // coordinates = new google.maps.LatLng(this.lat, this.lng);

  constructor(private router: Router) { }

  mapOptions: google.maps.MapOptions = {
    // center: this.coordinates,
    zoom: 8,
  };

  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  // });



  mapInitializer() {
    this.map = new google.maps.Map(
      this.gmap.nativeElement,
      this.mapOptions);
    this.addLocation(this.lat, this.lng);
    this.addLocation(this.lat2, this.lng2);
    this.addLocation(33.23, -152.25);
    this.centerMap(this.lat, this.lng);
   }

   ngAfterViewInit() {
    this.mapInitializer();
  }

  public addLocation(latitude, longitude) {
    var mk = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: this.map
    });
    this.pegs.push(mk);
  }

  public centerMap(latitude, longitude) {
    this.map.setCenter(new google.maps.LatLng(latitude, longitude));
  }
}
