import { ValueType } from "../../kernel/meta/ValueType";
import { SiUnit } from "./SiUnit";

export class SiUnitType extends ValueType {

    constructor(protected readonly sunit: SiUnit) {
        super();
    }


    isValidValue(value: SiUnit): boolean {
        return true;
    }

}

export class SingleUnit {

    constructor(private readonly value: SiUnit,
                private readonly name: string,
                private readonly unitName: string,
                private readonly unitShortName: string) {
    }

}

export const lengthUnit = new SingleUnit(new SiUnit({l:1}),"length", "meters", "m");
export const weightUnit = new SingleUnit(new SiUnit({ w: 1 }),"weight", "kilograms", "kg");
export const timeUnit = new SingleUnit(new SiUnit({ t: 1 }), "time", "seconds", "s");
export const amperageUnit = new SingleUnit(new SiUnit({ a: 1 }), "amperage", "ampere", "A");
export const temperatureUnit = new SingleUnit(new SiUnit({ te: 1 }), "temperature", "kelvin", "K");
export const substanceUnit = new SingleUnit(new SiUnit({ s: 1 }), "substanceUnit", "mole", "mol");
export const lumIntensity = new SingleUnit(new SiUnit({ lu: 1 }), "lumIntensity", "candela", "cd");


// export const measurementUnits = new ObjectType({
//     l: lengthUnit, 
//     w: weightUnit,
//     t: timeUnit,
//     a: amperageUnit,
//     te: temperatureUnit,
//     s: substanceUnit,
//     lu: lumIntensity
// })