import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TableComponent } from './Components/table/table.component';
import { FilterComponent } from './Components/filter/filter.component';
import { DetailsComponent } from './Components/details/details.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { AddPersonComponent } from './Components/add-person/add-person.component';
import { EditPersonComponent } from './Components/edit-person/edit-person.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent,
    DetailsComponent,
    DeleteComponent,
    AddPersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
