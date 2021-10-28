import { ValueType } from "../../kernel/meta/ValueType";
import { NumberType } from "../../kernel/types/TypicalTypes/NumberType";
import { QuantityUnit } from "./QuantityUnit";
import { SingleUnit, SiUnitType } from "./SiUnitType";

export class QuantityUnitType extends ValueType {

    constructor(protected quantityType: NumberType, protected unitType: SiUnitType) {
        super();
    }

    isValidValue(value: QuantityUnit): boolean {
        return this.quantityType.isValidValue(value.quantity) && this.unitType.isValidValue(value.unitType)
    }

}