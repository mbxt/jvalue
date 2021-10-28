import { NumberType } from "../../kernel/types/TypicalTypes/NumberType";
import { LowerRangeRestriction } from "../../kernel/rules/LowerRangeRestriction";
import { UpperRangeRestriction } from "../../kernel/rules/UpperRangeRestriction";
import { QuantityUnitType } from "./QuantityType";
import { QuantityUnit } from "./QuantityUnit"
import { SiUnit } from "./SiUnit"
import { lengthUnit, SingleUnit, SiUnitType } from "./SiUnitType";

describe('Quantity Type test', () => {

    it('Correct array types test', () => {
        let boundNumberType = new NumberType().withRule(new LowerRangeRestriction(8));
        let quantityType = new QuantityUnitType(boundNumberType, new SiUnitType(SiUnit.l))
        expect(quantityType.isValidValue(new QuantityUnit(10.0, new SiUnitType(SiUnit.l)))).toBeTruthy()
    })

})