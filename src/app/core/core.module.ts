import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule,
    FormsModule
  ],
  declarations: [MainHeaderComponent, CategoriesComponent, HomeComponent, LoginComponent, UserDashboardComponent, AdminDashboardComponent],
  exports: [
    MainHeaderComponent
  ]
})
export class CoreModule { }
