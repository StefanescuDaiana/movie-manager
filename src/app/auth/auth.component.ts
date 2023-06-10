import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('',[Validators.required]);
  reTypePasswordFormControl =new FormControl('',[Validators.required]);

  viewType: string = 'login';
  message:string = 'Bun-venit!';
  age: number = 100.5;
  isTrue: boolean = false;
public onLogin():void
{
 let text = "";
 switch (text)
 {
  case'Login':
  break;
  case'Register':
  break;
  }
}

public onRegister():void
{
  let email = this.emailFormControl.getRawValue()!;
  let password = this.passwordFormControl.getRawValue();
  let reTypePassord = this.reTypePasswordFormControl.getRawValue();

  if(password == reTypePassord)
  {
    console.log("Parolele se potrivesc");
  }
  else
  {
    alert("Parolele nu se potrivesc");
  }
}
public onViewChange(): void
{
  if(this.viewType == 'login')
  {
    this.viewType = 'register';
  }
  else
  {
    this.viewType = 'login';
  }
}
}
