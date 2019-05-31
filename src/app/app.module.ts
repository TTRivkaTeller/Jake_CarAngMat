import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';

import {
  MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSidenavModule, MatListModule, MatSortModule,
  MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatGridListModule, MatMenuModule} from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchCarsComponent } from './search-cars/search-cars.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';
import { RentalsComponent } from './rentals/rentals.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SearchCarsComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    RentalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
   // FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatSortModule,
    AngularFontAwesomeModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
