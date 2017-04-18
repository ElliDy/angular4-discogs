import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// container
import { HomeComponent } from './container/home/home.component';

// routing
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
