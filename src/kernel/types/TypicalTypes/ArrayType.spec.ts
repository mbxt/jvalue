import { MaxLengthRule } from "../../rules/MaxLengthRule"
import { MinLengthRule } from "../../rules/MinLengthRule"
import { ArrayType } from "./ArrayType"
import { NumberType } from "./NumberType"
import { StringType } from "./StringType"

describe('Testing ArrayType', () => {
    const arrayVal = new ArrayType(new StringType())

    it('Correct array types test', () => {
        expect(arrayVal.isValidValue(["Test"])).toBeTruthy()
        expect(arrayVal.isValidValue([])).toBeTruthy()

    })
    it('Incorrect array types test', () => {
        expect(arrayVal.isValidValue([1, 2])).toBeFalsy()
        expect(arrayVal.isValidValue([1, "a"])).toBeFalsy()
        expect(arrayVal.isValidValue("a")).toBeFalsy()
        expect(arrayVal.isValidValue([2, "a"])).toBeFalsy()
    })

    it('Array type test with minimum length rule', () => {
        const arrayVal = new ArrayType(new NumberType()).withRule(new MinLengthRule(3))
        expect(arrayVal.isValidValue([1, 2])).toBeFalsy()
        expect(arrayVal.isValidValue([1])).toBeFalsy()
        expect(arrayVal.isValidValue([1,2,3])).toBeTruthy()
        expect(arrayVal.isValidValue([2,3,4,5,6])).toBeTruthy()
    })

    it('Array type test with maximum length rule', () => {
        const arrayVal = new ArrayType(new NumberType()).withRule(new MaxLengthRule(3))
        expect(arrayVal.isValidValue([1, 2])).toBeTruthy()
        expect(arrayVal.isValidValue([1])).toBeTruthy()
        expect(arrayVal.isValidValue([1, 2, 3])).toBeTruthy()
        expect(arrayVal.isValidValue([2, 3, 4, 5, 6])).toBeFalsy()
    })

})