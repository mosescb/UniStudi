import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ChecklistComponent } from './checklist/checklist.component';
import { FGDashboardComponent } from './fgdashboard/fgdashboard.component';
import { FGPageComponent } from './fgpage/fgpage.component';
import { UniNewsComponent } from './uni-news/uni-news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'checklist', component: ChecklistComponent,canActivate: [AuthGuard] },
  { path: 'FGDashboard', component: FGDashboardComponent,canActivate: [AuthGuard] },
  { path: 'fgPage/:id', component: FGPageComponent,canActivate: [AuthGuard] },
  { path: 'uniNews', component: UniNewsComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, LoginComponent];
