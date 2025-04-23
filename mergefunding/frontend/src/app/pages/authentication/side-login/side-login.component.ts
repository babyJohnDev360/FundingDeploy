import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreService } from 'src/app/services/core.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-side-login',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {

  constructor( private router: Router ,private connectaServe: CoreService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  async fetchData(loginForm: any) {
    try {     
      // this.router.navigate(['/home']);
      console.log(loginForm.value);
      const response: any = await lastValueFrom(
        this.connectaServe.login('user/adminLogin', loginForm.value)
      );
      if (response.status) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.error(error);
    }
  }
  get f() {
    return this.loginForm.controls;
  }

}
