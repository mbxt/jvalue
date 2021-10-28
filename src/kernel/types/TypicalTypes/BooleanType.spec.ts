import { BooleanType } from "./BooleanType"
import { ConstType } from "./ConstType"

describe('Test ConstType', () => {
    const boolVal = new BooleanType()

    it('parsing successful boolVal', () => {
        expect(boolVal.isValidValue(true)).toBeTruthy()
        expect(boolVal.isValidValue(false)).toBeTruthy()

    })
    it('parsing unsuccessful boolVal', () => {
        expect(boolVal.isValidValue(1)).toBeFalsy()
        expect(boolVal.isValidValue("")).toBeFalsy()
        expect(boolVal.isValidValue([])).toBeFalsy()
        expect(boolVal.isValidValue(0)).toBeFalsy()
    })

})