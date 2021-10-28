import { ValueType } from "./ValueType"

describe('Value equality check', () => {

    it('Successful Equality checks', () => {
        expect(ValueType.verifyEquality(1, 1)).toBeTruthy()
        expect(ValueType.verifyEquality("a", "a")).toBeTruthy()
        expect(ValueType.verifyEquality([1], [1])).toBeTruthy()
        expect(ValueType.verifyEquality([1, [2], [1, [3]]], [1, [2], [1, [3]]])).toBeTruthy()
        expect(ValueType.verifyEquality(false, false)).toBeTruthy()

    })

    it('Unsucessful Equality checks', () => {
        expect(ValueType.verifyEquality(1, "1")).toBeFalsy()
        expect(ValueType.verifyEquality("a", 1)).toBeFalsy()
        expect(ValueType.verifyEquality([1], [2])).toBeFalsy()
        expect(ValueType.verifyEquality([1, [2], [1, [3]]], [1, [2], [3, [3]]])).toBeFalsy()
        expect(ValueType.verifyEquality(false, true)).toBeFalsy()
        expect(ValueType.verifyEquality(false, 0)).toBeFalsy()
    })

})