import { MetaObject } from "../../kernel/meta/MetalevelObject";
import { ValueObject } from "../../kernel/meta/ValueObject";
import { SiUnit } from "./SiUnit";
import { SiUnitType } from "./SiUnitType";

export class QuantityUnit extends ValueObject {

    constructor(quantity: number = 0, unitType: SiUnitType = new SiUnitType(new SiUnit(SiUnit.None))) {
        super({ quantity: quantity, unitType: unitType})
    }

    get quantity() {
        return this.value.quantity
    }

    get unitType() {
        return this.value.unitType
    }

    add(other: QuantityUnit) {
        if (!this.unitType.equalTo(other.unitType)) {
            throw new Error();
        }
        return new QuantityUnit(this.quantity + other.quantity, this.unitType);
    }

    subtract(other: QuantityUnit) {
        if (!this.unitType.equalTo(other.unitType)) {
            throw new Error();
        }
        return new QuantityUnit(this.quantity - other.quantity, this.unitType);
    }

    multiply(multiplier: QuantityUnit) {
        return new QuantityUnit(this.quantity * multiplier.quantity, this.unitType.multiply(multiplier.unitType))
    }

    divisor(multiplier: QuantityUnit) {
        return new QuantityUnit(this.quantity / multiplier.quantity, this.unitType.divide(multiplier.unitType))
    }

    power(power: number) {
        return new QuantityUnit(Math.pow(this.quantity, power), this.unitType.power(power))
    }

    serialize(value: unknown): String {
        throw new Error("Method not implemented.");
    }
    equalTo(other: MetaObject): boolean {
        throw new Error("Method not implemented.");
    }

}