import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

//Importing APi client
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiModule, BASE_PATH } from '@skraus/mushroom-api-client';
import { environment } from '../environments/environment';
import { MushroomPredictionComponent, MushroomPredictionDialog } from './mushroom-prediction/mushroom-prediction.component';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule,  MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatButtonModule,  MatMenuModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatTableModule, MatListModule, MatExpansionModule, MatGridListModule, MatSnackBar, MatSnackBarModule} from '@angular/material';
import { Enum2arrayPipe } from './enum2array.pipe';

//Angluar Flex
import { FlexLayoutModule } from '@angular/flex-layout';
import { MushroomHistoryComponent } from './mushroom-history/mushroom-history.component';



@NgModule({
  declarations: [
    AppComponent,
    MushroomPredictionComponent,
    Enum2arrayPipe,
    MushroomPredictionDialog,
    MushroomHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSnackBarModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }/*,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }*/],
  bootstrap: [AppComponent],
  entryComponents: [
   MushroomPredictionDialog
  ]
})
export class AppModule { }
