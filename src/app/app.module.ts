import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
// import {Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


import { AddFormComponent } from './add-form/add-form.component';
import { AddressesListComponent } from './addresses-list/addresses-list.component';


const appRoutes: Routes = [
  { path: '', component: AddFormComponent},
  { path: 'list', component: AddressesListComponent },
  // { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    AddressesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
