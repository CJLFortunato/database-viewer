import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './Components/table/table.component';
import { FilterComponent } from './Components/filter/filter.component';
import { DetailsComponent } from './Components/details/details.component';
import { DeleteComponent } from './Components/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent,
    DetailsComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
