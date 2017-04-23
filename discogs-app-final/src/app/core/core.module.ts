import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// services
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [],
  exports: [],
  providers: [
    DataService
  ]
})
export class CoreModule { }
