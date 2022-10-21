import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieFilters } from '../models/movie-filters';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = "https://localhost:7245/api/movies"
  constructor(private http: HttpClient) { }
  getMovies(){
    return this.http.get(this.url)
  }

  getMoviesFilter(movieFilter:MovieFilters){
    var queryparams:any = {} 
    if (movieFilter.title) queryparams.title = movieFilter.title
    if (movieFilter.genreId) queryparams.genreId = movieFilter.genreId
    if(movieFilter.onBillboard) queryparams.onBillboard = movieFilter.onBillboard
    if (movieFilter.commingSoon) queryparams.commingSoon = movieFilter.commingSoon

    return this.http.get(this.url + '/filter', {
      params: queryparams,
      observe: 'response'
    })
  }

  getMovie(id:string){
    return this.http.get(this.url + '/' + id)
  }

}
