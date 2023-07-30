import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        if (error.status === 401) {
          const dialogRef = this.dialog.open(DialogComponent, {
            data: {
              title: 'ERRORE 401',
              errorMessage: 'Credenziali errate.',
              isConfirmation: false,
            },
          });
        } else {
          console.error(error);
        }
      }
    );
  }
}
