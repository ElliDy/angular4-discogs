import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcUserComponent } from './dc-user/dc-user.component';
import { DcCollectionComponent } from './dc-collection/dc-collection.component';
import { DcCollectionItemComponent } from './dc-collection-item/dc-collection-item.component';

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
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
