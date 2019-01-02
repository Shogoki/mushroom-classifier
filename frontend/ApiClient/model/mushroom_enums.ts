
export namespace _Mushroom {
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
        Attached: 'a' as GillAttachmentEnum,
        Descending: 'd' as GillAttachmentEnum,
        Free: 'f' as GillAttachmentEnum,
        Notched: 'n' as GillAttachmentEnum
    };
    export type GillSpacingEnum = 'c' | 'w' | 'd';
    export const GillSpacingEnum = {
        Close: 'c' as GillSpacingEnum,
        Crowded: 'w' as GillSpacingEnum,
        Distant: 'd' as GillSpacingEnum
    };
    export type GillSizeEnum = 'b' | 'n';
    export const GillSizeEnum = {
        Broad: 'b' as GillSizeEnum,
        Narrow: 'n' as GillSizeEnum
    };
    export type GillColorEnum = 'k' | 'n' | 'b' | 'h' | 'g' | 'r' | 'o' | 'p' | 'u' | 'e' | 'w' | 'y';
    export const GillColorEnum = {
        Black: 'k' as GillColorEnum,
        Brown: 'n' as GillColorEnum,
        Buff: 'b' as GillColorEnum,
        Chocolate: 'h' as GillColorEnum,
        Gray: 'g' as GillColorEnum,
        Green: 'r' as GillColorEnum,
        Orange: 'o' as GillColorEnum,
        Pink: 'p' as GillColorEnum,
        Purple: 'u' as GillColorEnum,
        Red: 'e' as GillColorEnum,
        White: 'w' as GillColorEnum,
        Yellow: 'y' as GillColorEnum
    };
    export type StalkShapeEnum = 'e' | 't';
    export const StalkShapeEnum = {
        Enlarging: 'e' as StalkShapeEnum,
        Tapering: 't' as StalkShapeEnum
    };
    export type StalkRootEnum = 'b' | 'c' | 'u' | 'e' | 'z' | 'r';
    export const StalkRootEnum = {
        Bulborous: 'b' as StalkRootEnum,
        Club: 'c' as StalkRootEnum,
        Cup: 'u' as StalkRootEnum,
        Equal: 'e' as StalkRootEnum,
        Rizomotphs: 'z' as StalkRootEnum,
        Rooted: 'r' as StalkRootEnum,
        Missing: '?' as StalkRootEnum
    };
    export type StalkSurfaceAboveRingEnum = 'f' | 'y' | 'k' | 's';
    export const StalkSurfaceAboveRingEnum = {
        Fibrous: 'f' as StalkSurfaceAboveRingEnum,
        Scaly: 'y' as StalkSurfaceAboveRingEnum,
        Silky: 'k' as StalkSurfaceAboveRingEnum,
        Smooth: 's' as StalkSurfaceAboveRingEnum
    };
    export type StalkSurfaceBelowRingEnum = 'f' | 'y' | 'k' | 's';
    export const StalkSurfaceBelowRingEnum = {
        Fibrous: 'f' as StalkSurfaceBelowRingEnum,
        Scaly: 'y'  as StalkSurfaceBelowRingEnum,
        Silky: 'k'  as StalkSurfaceBelowRingEnum,
        Smooth: 's' as StalkSurfaceBelowRingEnum
    };
    export type StalkColorAboveRingEnum = 'n' | 'b' | 'c' | 'g' | 'o' | 'p' | 'e' | 'w' | 'y';
    export const StalkColorAboveRingEnum = {
        Brown: 'n'      as StalkColorAboveRingEnum,
        Buff: 'b'       as StalkColorAboveRingEnum,
        Cinnamon: 'c'   as StalkColorAboveRingEnum,
        Gray: 'g'       as StalkColorAboveRingEnum,
        Orange: 'o'     as StalkColorAboveRingEnum,
        Pink: 'p'       as StalkColorAboveRingEnum,
        Red: 'e'        as StalkColorAboveRingEnum,
        White: 'w'      as StalkColorAboveRingEnum,
        Yellow: 'y'     as StalkColorAboveRingEnum
    };
    export type StalkColorBelowRingEnum = 'n' | 'b' | 'c' | 'g' | 'o' | 'p' | 'e' | 'w' | 'y';
    export const StalkColorBelowRingEnum = {
        Brown: 'n'      as StalkColorBelowRingEnum,
        Buff: 'b'       as StalkColorBelowRingEnum,
        Cinnamon: 'c'   as StalkColorBelowRingEnum,
        Gray: 'g'       as StalkColorBelowRingEnum,
        Orange: 'o'     as StalkColorBelowRingEnum,
        Pink: 'p'       as StalkColorBelowRingEnum,
        Red: 'e'        as StalkColorBelowRingEnum,
        White: 'w'      as StalkColorBelowRingEnum,
        Yellow: 'y'     as StalkColorBelowRingEnum
    };
    export type VeilTypeEnum = 'p' | 'u';
    export const VeilTypeEnum = {
        Partial: 'p' as VeilTypeEnum,
        Universal: 'u' as VeilTypeEnum
    };
    export type VeilColorEnum = 'n' | 'o' | 'w' | 'y';
    export const VeilColorEnum = {
        Brown: 'n' as VeilColorEnum,
        Orange: 'o' as VeilColorEnum,
        White: 'w' as VeilColorEnum,
        Yellow: 'y' as VeilColorEnum
    };
    export type RingNumberEnum = 'n' | 'o' | 't';
    export const RingNumberEnum = {
        None: 'n' as RingNumberEnum,
        One: 'o' as RingNumberEnum,
        Two: 't' as RingNumberEnum
    };
    export type RingTypeEnum = 'c' | 'e' | 'f' | 'l' | 'n' | 'p' | 's' | 'z';
    export const RingTypeEnum = {
        Cobwebby: 'c' as RingTypeEnum,
        Evanescent: 'e' as RingTypeEnum,
        Flaring: 'f' as RingTypeEnum,
        Large: 'l' as RingTypeEnum,
        None: 'n' as RingTypeEnum,
        Pendant: 'p' as RingTypeEnum,
        Sheathing: 's' as RingTypeEnum,
        Zone: 'z' as RingTypeEnum
    };
    export type SporePrintColorEnum = 'k' | 'n' | 'b' | 'h' | 'r' | 'o' | 'u' | 'w' | 'y';
    export const SporePrintColorEnum = {
        Black: 'k' as SporePrintColorEnum,
        Brown: 'n' as SporePrintColorEnum,
        Buff: 'b' as SporePrintColorEnum,
        Chocolate: 'h' as SporePrintColorEnum,
        Green: 'r' as SporePrintColorEnum,
        Orange: 'o' as SporePrintColorEnum,
        Purple: 'u' as SporePrintColorEnum,
        White: 'w' as SporePrintColorEnum,
        Yellow: 'y' as SporePrintColorEnum
    };
    export type PopulationEnum = 'a' | 'c' | 'n' | 's' | 'v' | 'y';
    export const PopulationEnum = {
        Abundant: 'a' as PopulationEnum,
        Clustered: 'c' as PopulationEnum,
        Numerous: 'n' as PopulationEnum,
        Scattered: 's' as PopulationEnum,
        Several: 'v' as PopulationEnum,
        Solitary: 'y' as PopulationEnum
    };
    export type HabitatEnum = 'g' | 'l' | 'm' | 'p' | 'u' | 'w' | 'd';
    export const HabitatEnum = {
        Grasses: 'g' as HabitatEnum,
        Leaves: 'l' as HabitatEnum,
        Meadows: 'm' as HabitatEnum,
        Paths: 'p' as HabitatEnum,
        Urban: 'u' as HabitatEnum,
        Waste: 'w' as HabitatEnum,
        Woods: 'd' as HabitatEnum
    };
}

