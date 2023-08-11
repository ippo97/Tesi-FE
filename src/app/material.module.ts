import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'; // Importa MatDatepickerModule
import { MatNativeDateModule } from '@angular/material/core'; // Importa MatNativeDateModule
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatGridListModule
   
  ],
})
export class MaterialModule {}
