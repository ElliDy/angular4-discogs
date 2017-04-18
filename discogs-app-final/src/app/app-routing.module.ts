import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DcUserComponent } from './dc-user/dc-user.component';
import { DcCollectionComponent } from './dc-collection/dc-collection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'user/soulunit',
    component: DcUserComponent
  },
  {
    path: 'user/soulunit/collection',
    component: DcCollectionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
