import { getLocaleDirection } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  data:any;
  id:string;
  public lat:any = -31.413093411314275;
  public long:any = -64.19649246043446;
  constructor(private route: ActivatedRoute,
    private moviesService:MoviesService) { }
  
  ngOnInit(): void {
    this.getLocation();
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.moviesService.getMovie(this.id).subscribe( result => {
      this.data = result;
    })
  }

  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          console.log(this.lat);
          console.log(this.long);
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    }
  }
