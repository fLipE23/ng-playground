import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Pipe} from '@angular/core';
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
import { AddressTableComponent } from './address-table/address-table.component';
import { PropertiesTableComponent } from './properties-table/properties-table.component';
import { FirstKeyPipePipe } from './pipes/first-key-pipe.pipe';


const appRoutes: Routes = [
  { path: '', component: AddFormComponent},
  { path: 'list', component: AddressesListComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    AddressesListComponent,
    AddressTableComponent,
    PropertiesTableComponent,
    FirstKeyPipePipe
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
