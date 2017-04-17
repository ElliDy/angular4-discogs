import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcUserComponent } from './dc-user/dc-user.component';
import { DcCollectionComponent } from './dc-collection/dc-collection.component';

const routes: Routes = [
  {
    path: 'discogs',
    children: []
  },
  {
    path: 'user/soulunit',
    component: DcUserComponent 
  },
  {
    path: 'user/soulunit/collection',
    component: DcCollectionComponent
  },
  { path: '',
    redirectTo: '/discogs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
