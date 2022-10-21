import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MovieFilters } from 'src/app/models/movie-filters';
import { MoviesService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  data:any;
  constructor(private moviesData:MoviesService) { }

  ngOnInit(): void {
    var filters:MovieFilters = {
      onBillboard: true
    } 
    this.moviesData.getMovies().subscribe(result => {
      this.data = result;
    })

  }


}
