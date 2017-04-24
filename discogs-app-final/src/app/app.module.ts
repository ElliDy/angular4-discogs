import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './container/home/home.component';
import { CollectionComponent } from './container/collection/collection.component';
import { CollectionItemComponent } from './container/collection/components/collection-item/collection-item.component';
import { UserComponent } from './container/user/user.component';

// routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CollectionComponent,
    CollectionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
