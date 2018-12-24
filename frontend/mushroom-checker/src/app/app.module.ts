import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH } from '@skraus/mushroom-api-client';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MushroomPredictionComponent } from './mushroom-prediction/mushroom-prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    MushroomPredictionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
