import {AfterContentChecked, Component} from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterContentChecked{
  movieList: Array<any> = [];
  constructor(private movieService:MovieService) {
    this.movieList = this.movieService.getMovieList();
  }

  public refreshList(): void{
    this.movieList = this.movieService.getMovieList();
  }

  ngAfterContentChecked(): void {
    this.refreshList();
  }
}
