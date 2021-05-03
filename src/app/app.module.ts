import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TemperaturePipe } from './temperature.pipe';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import { HistoryComponent } from './history/history.component';
import {FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    TemperaturePipe,
    WeatherIconComponent,
    AutoCompleteComponent,
    HistoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
