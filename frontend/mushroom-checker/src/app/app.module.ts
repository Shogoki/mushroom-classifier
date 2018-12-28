import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importing APi client
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH } from '@skraus/mushroom-api-client';
import { environment } from '../environments/environment';
import { MushroomPredictionComponent } from './mushroom-prediction/mushroom-prediction.component';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    MushroomPredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
