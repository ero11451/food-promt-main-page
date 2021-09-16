import { TestimonyComponent } from './testimony/testimony.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { ServicesComponent } from './services/services.component';
import { DownloadComponent } from './download/download.component';
import { SubcripsionComponent } from './subcripsion/subcripsion.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    TestimonyComponent,
    FooterComponent,
    ServicesComponent,
    DownloadComponent,
    SubcripsionComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    TestimonyComponent,
    ServicesComponent,
    FooterComponent,
    SubcripsionComponent,
    DownloadComponent,
    LocationComponent
]
})
export class ComponentModule { }
