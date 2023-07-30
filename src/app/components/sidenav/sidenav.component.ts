import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  logout() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Conferma Logout',
        errorMessage: 'Sei sicuro di voler eseguire il logout?',
        isConfirmation: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'Y') {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }
}
