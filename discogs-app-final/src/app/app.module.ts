import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';

// modules
import { HomeModule } from './modules/home/home.module';

// components
import { AppComponent } from './app.component';
import { DcCollectionComponent } from './dc-collection/dc-collection.component';
import { DcCollectionItemComponent } from './dc-collection-item/dc-collection-item.component';
import { DcUserComponent } from './dc-user/dc-user.component';

// routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DcUserComponent,
    DcCollectionComponent,
    DcCollectionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
