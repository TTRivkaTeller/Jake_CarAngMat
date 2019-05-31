import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RentalsComponent } from './rentals/rentals.component';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rentals', component: RentalsComponent },
  { path: 'search', component: SearchCarsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
