import { Component, OnInit } from '@angular/core';
import {Mushroom, _Mushroom} from '@skraus/mushroom-api-client/'
@Component({
  selector: 'app-mushroom-prediction',
  templateUrl: './mushroom-prediction.component.html',
  styleUrls: ['./mushroom-prediction.component.css']
})
export class MushroomPredictionComponent implements OnInit {

  constructor() { }
  capShape
  mushroom: Mushroom
  ngOnInit() {
    
  }
  getValues(featureEnum)
  {
    return   Object.keys(featureEnum)
  }
  getMushroomFeatures() {
  return   [
    {
      name: "capShape",
      Enum: _Mushroom.CapShapeEnum  },
      {
      name: "capSurface",
      Enum: _Mushroom.CapSurfaceEnum     }
    ]
  
/*
    _class?: Mushroom.ClassEnum;
    capShape: Mushroom.CapShapeEnum;
    capSurface: Mushroom.CapSurfaceEnum;
    capColor: Mushroom.CapColorEnum;
    bruises: Mushroom.BruisesEnum;
    odor: Mushroom.OdorEnum;
    gillAttachment: Mushroom.GillAttachmentEnum;
    gillSpacing: Mushroom.GillSpacingEnum;
    gillSize: Mushroom.GillSizeEnum;
    gillColor: Mushroom.GillColorEnum;
    stalkShape: Mushroom.StalkShapeEnum;
    stalkRoot: Mushroom.StalkRootEnum;
    stalkSurfaceAboveRing: Mushroom.StalkSurfaceAboveRingEnum;
    stalkSurfaceBelowRing: Mushroom.StalkSurfaceBelowRingEnum;
    stalkColorAboveRing: Mushroom.StalkColorAboveRingEnum;
    stalkColorBelowRing: Mushroom.StalkColorBelowRingEnum;
    veilType: Mushroom.VeilTypeEnum;
    veilColor: Mushroom.VeilColorEnum;
    ringNumber: Mushroom.RingNumberEnum;
    ringType: Mushroom.RingTypeEnum;
    sporePrintColor: Mushroom.SporePrintColorEnum;
    population: Mushroom.PopulationEnum;
    habitat: Mushroom.HabitatEnum;
    */
  }

}
