/**
 * Mushroom-Checker
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*Adding import to edited enums */

import {Mushroom} from './mushroom_enums'

export interface Mushroom { 
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
}
