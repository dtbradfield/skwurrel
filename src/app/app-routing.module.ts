import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'stream', component: StreamComponent },
  { path: '*', component: LandingComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
