import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
