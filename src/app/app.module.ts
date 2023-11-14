import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { CustomBarChartComponent } from './components/custom-bar-chart/custom-bar-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidenav/sidenav.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { UserService } from './services/user.service';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DialogComponent } from './components/dialog/dialog.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DialogComponent,
    CustomBarChartComponent,
    UserManagementComponent,
    SidebarComponent,
    UserProfileComponent,
    DetailedInfoComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,

  ],
  providers: [AuthService, DataService, AuthGuard,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
