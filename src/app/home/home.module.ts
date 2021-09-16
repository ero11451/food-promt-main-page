import { ComponentModule } from './../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    ComponentModule,
    CommonModule,
    MaterialModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
