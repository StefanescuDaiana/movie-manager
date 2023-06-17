import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent {
  @Input() movie: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private movieService:MovieService) {

  }
  public onDelete(): void {
    //alert("S-a apasat delete");
    this.movieService.deleteMovie(this.movie.id!).then((response: any) => {
      console.log(response);
      alert(response.message);
      this.onChange.emit();

    })
  }

}
