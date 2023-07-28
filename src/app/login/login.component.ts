import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
            private authService: AuthService,
            private dialogService : DialogService,
            private router: Router,
            )
    {}

  login() {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          if(response.token){
            this.router.navigate(['/dashboard']);
          }
        },
        error => {
          if (error.status === 401) {
            this.dialogService.openErrorDialog('Invalid username or password.');
          } else {
            console.error(error);
            // Altri tipi di gestione degli errori
          }
        }
      );
  }
}
