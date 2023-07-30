import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidenav/sidenav.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: SidebarComponent, // Utilizza il componente SidebarComponent come componente padre
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect alla dashboard come pagina predefinita
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account', component: UserProfileComponent },
      { path: 'users', component: UserManagementComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
