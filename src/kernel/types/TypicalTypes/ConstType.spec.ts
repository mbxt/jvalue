import { ConstType } from "./ConstType"

describe('Test ConstType', () => {
    const constVal = new ConstType("1")

    it('parsing string successful const', () => {
        expect(constVal.isValidValue("1")).toBeTruthy()
    })
    it('parsing string usuccessful consts', () => {
        expect(constVal.isValidValue(1)).toBeFalsy()
        expect(constVal.isValidValue("test")).toBeFalsy()
        expect(constVal.isValidValue([1, 2, 3])).toBeFalsy()
        expect(constVal.isValidValue(false)).toBeFalsy()
        expect(constVal.isValidValue(7n)).toBeFalsy()
    })
    const constValBool = new ConstType(false)
    it('parsing string successful const', () => {
        expect(constValBool.isValidValue(false)).toBeTruthy()
    })
    it('parsing string usuccessful consts', () => {
        expect(constValBool.isValidValue("false")).toBeFalsy()
        expect(constValBool.isValidValue(NaN)).toBeFalsy()
        expect(constValBool.isValidValue([])).toBeFalsy()
        expect(constValBool.isValidValue(null)).toBeFalsy()
    })

})