import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroinesComponent } from './heroines/heroines.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroineDetailComponent } from './heroine-detail/heroine-detail.component';

const routes: Routes = [
  { path: 'heroines', component: HeroinesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroineDetailComponent },
];

// @NgModule metadata initializes the router and starts it listening for browser location changes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
