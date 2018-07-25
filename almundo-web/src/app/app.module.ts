import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HotelesListComponent } from './components/hoteles-list/hoteles-list.component';
import { FiltersComponent } from './components/filters/filters.component';

import { HotelesService } from './services/hoteles.service';


@NgModule({
  declarations: [
    AppComponent,
    HotelesListComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HotelesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
