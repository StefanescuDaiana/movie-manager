import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieList: Array<any> = [];

  constructor(private httpClient:HttpClient) {
    this.readMovies();
  }


  getMovieList(): Array<any> {
    return this.movieList;
  }

  createMovie(movie:any) {
    let body = {
      "title": movie.title,
      "description": movie.description,
      "year": movie.year,
      "director": movie.director
    }
    return this.httpClient.post(`${environment.apiUrl}/api/movie`, body).toPromise().then((response:any) => {
      this.readMovies();
      return response;
    });
  }

  updateMovie(movie:any) {
    let body = {
      "id": movie.id,
      "title": movie.title,
      "description": movie.description,
      "year": movie.year,
      "director": movie.director
    }
    return this.httpClient.patch(`${environment.apiUrl}/api/movie/${movie.id}`, body).toPromise().then((response:any) => {
      this.readMovies();
      return response;
    });
  }

  deleteMovie(id:string) {
    return this.httpClient.delete(`${environment.apiUrl}/api/movie/${id}`).toPromise().then((response:any) => {
      this.readMovies();
      return response;
    });
  }

  readMovies() {
    return this.httpClient.get(`${environment.apiUrl}/api/movie`).toPromise().then((response:any) => {
      console.log(response);
      this.movieList = response.data;
      return this.movieList;
    });
  }

}
