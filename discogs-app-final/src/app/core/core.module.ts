import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  providers: []
})
export class CoreModule { }
