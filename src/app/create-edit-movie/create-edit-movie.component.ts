import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-create-edit-movie',
  templateUrl: './create-edit-movie.component.html',
  styleUrls: ['./create-edit-movie.component.css']
})
export class CreateEditMovieComponent {

  movieFormGroup:FormGroup = new FormGroup({
    titleFormControl : new FormControl('', [Validators.required]),
    directorFormControl : new FormControl('',[Validators.required]),
    yearFormControl : new FormControl('',[Validators.required]),
    descriptionFormControl : new FormControl('',[Validators.required]),
  })

  constructor(private movieService:MovieService) {
  }
  public onSave():void
  {
    // let title = this.titleFormControl.getRawValue()!;
    // //! - reprezinta faptul ca valoare este diferita de null,
    // // adica ii spune compilatorului ca metoda getRawValue()
    // // va returna o valoare
    // let director = this.directorFormControl.getRawValue()!;
    // let year = this.yearFormControl.getRawValue()!;
    // let description = this.descriptionFormControl.getRawValue()!;
    /**
     * let, var, const se folosesc pentru a defini variabile in interiorul metodelor
     * cont = ne ajuta sa definim o variabila cu valoare fixa, valoarea nu se poate schimba
     * let = ne ajuta sa definim o variabila intr-un block de cod
     * var = ne ajuta sa definim o variabila la nivel global in metode, poate fi definita de 2 ori in aceeasi metoda
     * ex: var age = 20, var age = 30;(pt var nu va functiona)
     */
    console.log(this.movieFormGroup.value);
    let movie = {
      id:"",
      title: this.movieFormGroup.value.titleFormControl,
      description: this.movieFormGroup.value.descriptionFormControl,
      year: this.movieFormGroup.value.yearFormControl,
      director: this.movieFormGroup.value.directorFormControl
    };

    if(movie.id == "") {
      this.movieService.createMovie(movie).then((response: any) => {
        console.log(response);
        alert(response.message);
      })
    } else {
      this.movieService.updateMovie(movie).then((response: any) => {
        console.log(response);
        alert(response.message);
      })
    }

  }
}
