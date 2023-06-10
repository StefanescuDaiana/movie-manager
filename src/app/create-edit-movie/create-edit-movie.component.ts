import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-edit-movie',
  templateUrl: './create-edit-movie.component.html',
  styleUrls: ['./create-edit-movie.component.css']
})
export class CreateEditMovieComponent {
  titleFormControl = new FormControl('', [Validators.required]);
  directorFormControl = new FormControl('',[Validators.required]);
  yearFormControl =new FormControl('',[Validators.required]);
  descriptionFormControl =new FormControl('',[Validators.required]);

  public onSave():void
  {

  }
}
