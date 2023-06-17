import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

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

  constructor(private authService:AuthService, private router:Router) {
  }
public onLogin():void
{
  let email = this.emailFormControl.getRawValue()!;
  let password = this.passwordFormControl.getRawValue()!;
  this.authService.logIn(email,password).subscribe((response: any) => {
    console.log(response);
    alert(response.message);
    this.router.navigate(["/", "dashboard"]);
    // this.router.navigateByUrl("/dashboard");
  })
}

public onRegister():void
{
  let email = this.emailFormControl.getRawValue()!;
  let password = this.passwordFormControl.getRawValue()!;
  let reTypePassword = this.reTypePasswordFormControl.getRawValue()!;

  if(password == reTypePassword)
  {
    this.authService.register(email,password,reTypePassword).subscribe((response: any) => {
      console.log(response);
      alert(response.message);
      this.viewType = "login";
    })
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
