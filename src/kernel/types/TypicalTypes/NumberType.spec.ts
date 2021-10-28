import { LowerRangeRestriction } from "../../rules/LowerRangeRestriction"
import { UpperRangeRestriction } from "../../rules/UpperRangeRestriction"
import { WholeNumberRestriction } from "../../rules/WholeNumberRestriction"
import { NumberType } from "./NumberType"

describe('Test NumberType', () => {
    const numberType = new NumberType()

    it('parsing successful numbers', () => {
        expect(numberType.isValidValue(1)).toBeTruthy()
        expect(numberType.isValidValue(0)).toBeTruthy()
        expect(numberType.isValidValue(-1)).toBeTruthy()
        expect(numberType.isValidValue(NaN)).toBeTruthy()
        expect(numberType.isValidValue(-Infinity)).toBeTruthy()
        expect(numberType.isValidValue(+Infinity)).toBeTruthy()
    })
    it('parsing usuccessful literals', () => {
        expect(numberType.isValidValue("test")).toBeFalsy()
        expect(numberType.isValidValue([1, 2, 3])).toBeFalsy()
        expect(numberType.isValidValue(false)).toBeFalsy()
        expect(numberType.isValidValue(7n)).toBeFalsy()
    })

    it('parsing withRule LowerRange', () => {
        const numberTypeWithRule = new NumberType().withRule(new LowerRangeRestriction(10))
        expect(numberTypeWithRule.isValidValue(9)).toBeFalsy()
        expect(numberTypeWithRule.isValidValue(10)).toBeFalsy()
        expect(numberTypeWithRule.isValidValue(11)).toBeTruthy()
        expect(numberTypeWithRule.isValidValue(12)).toBeTruthy()
    })

    it('parsing withRule UpperRange', () => {
        const numberTypeWithRule = new NumberType().withRule(new UpperRangeRestriction(10, true))
        expect(numberTypeWithRule.isValidValue(9)).toBeTruthy()
        expect(numberTypeWithRule.isValidValue(10)).toBeTruthy()
        expect(numberTypeWithRule.isValidValue(11)).toBeFalsy()
        expect(numberTypeWithRule.isValidValue(12)).toBeFalsy()
    })

    it('parsing withRule isWholeValue', () => {
        const numberTypeWithRule = new NumberType().withRule(new WholeNumberRestriction())
        expect(numberTypeWithRule.isValidValue(9)).toBeTruthy()
        expect(numberTypeWithRule.isValidValue(10.1)).toBeFalsy()
        expect(numberTypeWithRule.isValidValue(11)).toBeTruthy()
    })

})