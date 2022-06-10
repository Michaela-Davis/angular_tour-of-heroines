import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroinesComponent } from './heroines/heroines.component';

const routes: Routes = [
  { path: 'heroines', component: HeroinesComponent }
];

// @NgModule metadata initializes the router and starts it listening for browser location changes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
