
export namespace Mushroom {
    export type ClassEnum = 'e' | 'p';
    export const ClassEnum = {
        Eatable: 'e' as ClassEnum,
        Poisonous: 'p' as ClassEnum
    };
    export type CapShapeEnum = 'b' | 'c' | 'x' | 'f' | 'k' | 's';
    export const CapShapeEnum = {
        Bell: 'b' as CapShapeEnum,
        Conical: 'c' as CapShapeEnum,
        Convex: 'x' as CapShapeEnum,
        Flat: 'f' as CapShapeEnum,
        Knobbed: 'k' as CapShapeEnum,
        Sunken: 's' as CapShapeEnum
    };
    export type CapSurfaceEnum = 'f' | 'g' | 'y' | 's';
    export const CapSurfaceEnum = {
        Fibrous: 'f' as CapSurfaceEnum,
        Grooves: 'g' as CapSurfaceEnum,
        Scaly: 'y' as CapSurfaceEnum,
        Smooth: 's' as CapSurfaceEnum
    };
    export type CapColorEnum = 'n' | 'b' | 'c' | 'g' | 'r' | 'p' | 'u' | 'e' | 'w' | 'y';
    export const CapColorEnum = {
        Brown: 'n' as CapColorEnum,
        Buff: 'b' as CapColorEnum,
        Cunnamon: 'c' as CapColorEnum,
        Gray: 'g' as CapColorEnum,
        Green: 'r' as CapColorEnum,
        Pink: 'p' as CapColorEnum,
        Purple: 'u' as CapColorEnum,
        Red: 'e' as CapColorEnum,
        White: 'w' as CapColorEnum,
        Yellow: 'y' as CapColorEnum
    };
    export type BruisesEnum = 't' | 'f';
    export const BruisesEnum = {
        Bruises: 't' as BruisesEnum,
        No: 'f' as BruisesEnum
    };
    export type OdorEnum = 'a' | 'l' | 'c' | 'y' | 'f' | 'm' | 'n' | 'p' | 's';
    export const OdorEnum = {
        Almond: 'a' as OdorEnum,
        Anise: 'l' as OdorEnum,
        Creosote: 'c' as OdorEnum,
        Fishy: 'y' as OdorEnum,
        Foul: 'f' as OdorEnum,
        Musty: 'm' as OdorEnum,
        None: 'n' as OdorEnum,
        Pungent: 'p' as OdorEnum,
        Spicy: 's' as OdorEnum
    };
    export type GillAttachmentEnum = 'a' | 'd' | 'f' | 'n';
    export const GillAttachmentEnum = {
        A: 'a' as GillAttachmentEnum,
        D: 'd' as GillAttachmentEnum,
        F: 'f' as GillAttachmentEnum,
        N: 'n' as GillAttachmentEnum
    };
    export type GillSpacingEnum = 'c' | 'w' | 'd';
    export const GillSpacingEnum = {
        C: 'c' as GillSpacingEnum,
        W: 'w' as GillSpacingEnum,
        D: 'd' as GillSpacingEnum
    };
    export type GillSizeEnum = 'b' | 'n';
    export const GillSizeEnum = {
        B: 'b' as GillSizeEnum,
        N: 'n' as GillSizeEnum
    };
    export type GillColorEnum = 'k' | 'n' | 'b' | 'h' | 'g' | 'r' | 'o' | 'p' | 'u' | 'e' | 'w' | 'y';
    export const GillColorEnum = {
        K: 'k' as GillColorEnum,
        N: 'n' as GillColorEnum,
        B: 'b' as GillColorEnum,
        H: 'h' as GillColorEnum,
        G: 'g' as GillColorEnum,
        R: 'r' as GillColorEnum,
        O: 'o' as GillColorEnum,
        P: 'p' as GillColorEnum,
        U: 'u' as GillColorEnum,
        E: 'e' as GillColorEnum,
        W: 'w' as GillColorEnum,
        Y: 'y' as GillColorEnum
    };
    export type StalkShapeEnum = 'e' | 't';
    export const StalkShapeEnum = {
        E: 'e' as StalkShapeEnum,
        T: 't' as StalkShapeEnum
    };
    export type StalkRootEnum = 'b' | 'c' | 'u' | 'e' | 'z' | 'r';
    export const StalkRootEnum = {
        B: 'b' as StalkRootEnum,
        C: 'c' as StalkRootEnum,
        U: 'u' as StalkRootEnum,
        E: 'e' as StalkRootEnum,
        Z: 'z' as StalkRootEnum,
        R: 'r' as StalkRootEnum
    };
    export type StalkSurfaceAboveRingEnum = 'f' | 'y' | 'k' | 's';
    export const StalkSurfaceAboveRingEnum = {
        F: 'f' as StalkSurfaceAboveRingEnum,
        Y: 'y' as StalkSurfaceAboveRingEnum,
        K: 'k' as StalkSurfaceAboveRingEnum,
        S: 's' as StalkSurfaceAboveRingEnum
    };
    export type StalkSurfaceBelowRingEnum = 'f' | 'y' | 'k' | 's';
    export const StalkSurfaceBelowRingEnum = {
        F: 'f' as StalkSurfaceBelowRingEnum,
        Y: 'y' as StalkSurfaceBelowRingEnum,
        K: 'k' as StalkSurfaceBelowRingEnum,
        S: 's' as StalkSurfaceBelowRingEnum
    };
    export type StalkColorAboveRingEnum = 'n' | 'b' | 'c' | 'g' | 'o' | 'p' | 'e' | 'w' | 'y';
    export const StalkColorAboveRingEnum = {
        N: 'n' as StalkColorAboveRingEnum,
        B: 'b' as StalkColorAboveRingEnum,
        C: 'c' as StalkColorAboveRingEnum,
        G: 'g' as StalkColorAboveRingEnum,
        O: 'o' as StalkColorAboveRingEnum,
        P: 'p' as StalkColorAboveRingEnum,
        E: 'e' as StalkColorAboveRingEnum,
        W: 'w' as StalkColorAboveRingEnum,
        Y: 'y' as StalkColorAboveRingEnum
    };
    export type StalkColorBelowRingEnum = 'n' | 'b' | 'c' | 'g' | 'o' | 'p' | 'e' | 'w' | 'y';
    export const StalkColorBelowRingEnum = {
        N: 'n' as StalkColorBelowRingEnum,
        B: 'b' as StalkColorBelowRingEnum,
        C: 'c' as StalkColorBelowRingEnum,
        G: 'g' as StalkColorBelowRingEnum,
        O: 'o' as StalkColorBelowRingEnum,
        P: 'p' as StalkColorBelowRingEnum,
        E: 'e' as StalkColorBelowRingEnum,
        W: 'w' as StalkColorBelowRingEnum,
        Y: 'y' as StalkColorBelowRingEnum
    };
    export type VeilTypeEnum = 'p' | 'u';
    export const VeilTypeEnum = {
        P: 'p' as VeilTypeEnum,
        U: 'u' as VeilTypeEnum
    };
    export type VeilColorEnum = 'n' | 'o' | 'w' | 'y';
    export const VeilColorEnum = {
        N: 'n' as VeilColorEnum,
        O: 'o' as VeilColorEnum,
        W: 'w' as VeilColorEnum,
        Y: 'y' as VeilColorEnum
    };
    export type RingNumberEnum = 'n' | 'o' | 't';
    export const RingNumberEnum = {
        N: 'n' as RingNumberEnum,
        O: 'o' as RingNumberEnum,
        T: 't' as RingNumberEnum
    };
    export type RingTypeEnum = 'c' | 'e' | 'f' | 'l' | 'n' | 'p' | 's' | 'z';
    export const RingTypeEnum = {
        C: 'c' as RingTypeEnum,
        E: 'e' as RingTypeEnum,
        F: 'f' as RingTypeEnum,
        L: 'l' as RingTypeEnum,
        N: 'n' as RingTypeEnum,
        P: 'p' as RingTypeEnum,
        S: 's' as RingTypeEnum,
        Z: 'z' as RingTypeEnum
    };
    export type SporePrintColorEnum = 'k' | 'n' | 'b' | 'h' | 'r' | 'o' | 'u' | 'w' | 'y';
    export const SporePrintColorEnum = {
        K: 'k' as SporePrintColorEnum,
        N: 'n' as SporePrintColorEnum,
        B: 'b' as SporePrintColorEnum,
        H: 'h' as SporePrintColorEnum,
        R: 'r' as SporePrintColorEnum,
        O: 'o' as SporePrintColorEnum,
        U: 'u' as SporePrintColorEnum,
        W: 'w' as SporePrintColorEnum,
        Y: 'y' as SporePrintColorEnum
    };
    export type PopulationEnum = 'a' | 'c' | 'n' | 's' | 'v' | 'y';
    export const PopulationEnum = {
        A: 'a' as PopulationEnum,
        C: 'c' as PopulationEnum,
        N: 'n' as PopulationEnum,
        S: 's' as PopulationEnum,
        V: 'v' as PopulationEnum,
        Y: 'y' as PopulationEnum
    };
    export type HabitatEnum = 'g' | 'l' | 'm' | 'p';
    export const HabitatEnum = {
        G: 'g' as HabitatEnum,
        L: 'l' as HabitatEnum,
        M: 'm' as HabitatEnum,
        P: 'p' as HabitatEnum
    };
}

