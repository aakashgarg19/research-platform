import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainHeaderComponent } from './components/main-header/main-header.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainHeaderComponent, CategoriesComponent],
  exports: [
    MainHeaderComponent
  ]
})
export class CoreModule { }
