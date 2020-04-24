import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  latitude: number = 41.1889614;
  longitude: number = -112.0896354;

  title = 'angular-gmap';
  map: google.maps.Map;
  pegs: google.maps.Marker[] = [];

  // lat = 41.1889614;
  // lng = -112.0896354;

  lat1 = 49.19;
  lng1 = -109.0896354;

  coordinates = new google.maps.LatLng(this.latitude, this.longitude);
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

  public addLocation() {
    this.addPeg(this.latitude, this.longitude);
  }

  public addPeg(latitude, longitude) {
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
