import { Component, OnInit, Inject } from '@angular/core';
import {Mushroom, _Mushroom} from '@skraus/mushroom-api-client/'
import {MushroomService} from '@skraus/mushroom-api-client/'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-mushroom-prediction',
  templateUrl: './mushroom-prediction.component.html',
  styleUrls: ['./mushroom-prediction.component.css']
})
export class MushroomPredictionComponent implements OnInit {

  constructor(private mushroomService: MushroomService, private dialog: MatDialog, private snackBar: MatSnackBar) { 
    this.mushroom = new Mushroom();
  }
 
  mushroom: Mushroom
  isLoading: Boolean
  MushroomFeatures 
  ngOnInit() {
    /*this.mushroom = {"capShape": _Mushroom.CapShapeEnum.Bell}*/
  
    this.MushroomFeatures = [
      {
        name: "cap-shape",
        Enum: _Mushroom.CapShapeEnum,
        value: "" 
        },
        {
        name: "cap-surface",
        Enum: _Mushroom.CapSurfaceEnum     ,
        value: ""},
        {
        name: "cap-color",
        Enum: _Mushroom.CapColorEnum     ,
        value: ""},
        {
        name: "bruises",
        Enum: _Mushroom.BruisesEnum     ,
        value: ""},
        {
        name: "odor",
        Enum: _Mushroom.OdorEnum     ,
        value: ""},
        {
        name: "gill-attachment",
        Enum: _Mushroom.GillAttachmentEnum     ,
        value: ""},
        {
        name: "gill-spacing",
        Enum: _Mushroom.GillSpacingEnum    ,
        value: ""},
        {
        name: "gill-size",
        Enum: _Mushroom.GillSizeEnum     ,
        value: ""},
        {
        name: "gill-color",
        Enum: _Mushroom.GillColorEnum     ,
        value: ""},
        {
      name: "stalk-shape",
      Enum: _Mushroom.StalkShapeEnum     ,
      value: ""},
      {
    name: "stalk-root",
    Enum: _Mushroom.StalkRootEnum     ,
    value: ""},
    {
    name: "stalk-surface-above-ring",
    Enum: _Mushroom.StalkSurfaceAboveRingEnum     ,
    value: ""},
    {
      name: "stalk-surface-below-ring",
      Enum: _Mushroom.StalkSurfaceBelowRingEnum    ,
      value: ""},
        {
      name: "stalk-color-above-ring",
      Enum: _Mushroom.StalkColorAboveRingEnum     ,
      value: ""},
      {
        name: "stalk-color-below-ring",
        Enum: _Mushroom.StalkColorBelowRingEnum     ,
        value: ""},
        {
          name: "veil-type",
          Enum: _Mushroom.VeilTypeEnum     ,
          value: ""},
          {
            name: "veil-color",
            Enum: _Mushroom.VeilColorEnum     ,
            value: ""},
            {
              name: "ring-number",
              Enum: _Mushroom.RingNumberEnum    ,
              value: ""},
              {
                name: "ring-type",
                Enum: _Mushroom.RingTypeEnum     ,
                value: ""},
                {
                  name: "spore-print-color",
                  Enum: _Mushroom.SporePrintColorEnum    ,
                  value: ""},
                  {
                    name: "population",
                    Enum: _Mushroom.PopulationEnum     ,
                    value: ""},
                    {
                      name: "habitat",
                      Enum: _Mushroom.HabitatEnum     ,
                      value: ""}
    
                                                  
        
      ]

  }
  getValues(featureEnum)
  {
    return   Object.keys(featureEnum)
  }
  
  

  getPrediction() : void{
    this.isLoading = true
    this.mushroom = new Mushroom()
    for(let feature of this.MushroomFeatures) {
      this.mushroom[feature.name] = feature.value
    }
    this.mushroomService.predict(this.mushroom).pipe(catchError((error) => {
        console.error('error getting Mushroom prediction', error);
        this.isLoading = false
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        this.openSnackBar(errMsg,"OK")
        return Observable.throw(error);
      })
    ).subscribe(mushroom => {
      this.mushroom = mushroom
      this.isLoading = false
      this.openDialog()
      }
      )
     
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  openDialog(): void {
   
    const dialogRef = this.dialog.open(MushroomPredictionDialog, {
      width: '250px',
      
      data:  this.mushroom.class == 'e' ? 'eatable': 'posionous'
    });
    }
}

@Component({
  selector: 'mushroom-prediction-dialog',
  templateUrl: 'mushroom-prediction-dialog.html',
})
export class MushroomPredictionDialog {
  
  displayClass: string
  constructor(
    public dialogRef: MatDialogRef<MushroomPredictionDialog>,
    @Inject(MAT_DIALOG_DATA) public mushroom: string) {
     
    }

  onClick(): void {
    this.dialogRef.close();
  }

}
