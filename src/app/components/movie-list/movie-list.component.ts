import { Component, OnInit,  } from '@angular/core';
import { MovieFilters } from 'src/app/models/movie-filters';
import { MoviesService } from 'src/app/services/movies-service.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  data:any;
  responsiveOptions:any;
  constructor(private moviesData:MoviesService) { 
    this.responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 4,
    numScroll: 5
},
{
  breakpoint: '560px',
  numVisible: 3,
  numScroll: 3
}
]
  }

  ngOnInit(): void {
    // var filters:MovieFilters = {
    //   onBillboard: true
    // } 
    this.moviesData.getMovies().subscribe(result => {
      this.data = result;
    })

  }


}
