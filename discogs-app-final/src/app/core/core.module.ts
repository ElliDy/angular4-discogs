import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// services
import { DataService } from './services/data.service';

// components
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [
    DataService
  ]
})
export class CoreModule { }
