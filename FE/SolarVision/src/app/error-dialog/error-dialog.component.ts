import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  template: `
    <h2 mat-dialog-title>Error</h2>
    <div mat-dialog-content>
      {{ errorMessage }}
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="'close'">Close</button>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public errorMessage: string) {}
}
