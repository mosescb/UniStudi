import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { GetChecklistDataService } from './get-checklist-data.service';
import { ChartModule } from 'primeng/chart';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {CheckboxModule} from 'primeng/checkbox';
import { ChecklistComponent } from './checklist/checklist.component';
import {CardModule} from 'primeng/card';
import { FGDashboardComponent } from './fgdashboard/fgdashboard.component';
import { FGPageComponent } from './fgpage/fgpage.component';
import { UniNewsComponent } from './uni-news/uni-news.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    ChecklistComponent,
    FGDashboardComponent,
    FGPageComponent,
    UniNewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    TableModule,
    HttpClientModule,
    ChartModule,
    ButtonModule,
    SplitButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    CardModule,
    InputTextModule
  ],
  providers: [GetChecklistDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
