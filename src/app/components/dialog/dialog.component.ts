import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <ng-container *ngIf="data.isConfirmation; else templateB">
      <!-- Template A -->
      <div mat-dialog-content>
        {{ data.errorMessage }}
      </div>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="'N'">No</button>
        <button mat-button [mat-dialog-close]="'Y'">Si</button>
      </div>
    </ng-container>

    <ng-template #templateB>
      <!-- Template B -->
      <div mat-dialog-content>
      {{ data.errorMessage }}
      </div>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="'close'">Close</button>
      </div>
    </ng-template>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
