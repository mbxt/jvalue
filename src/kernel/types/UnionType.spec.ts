import { MinLengthRule } from "../rules/MinLengthRule"
import { ObjectType } from "./ObjectType"
import { ConstType } from "./TypicalTypes/ConstType"
import { NumberType } from "./TypicalTypes/NumberType"
import { StringType } from "./TypicalTypes/StringType"
import { UnionType } from "./UnionType"

describe('Test UnionType', () => {
    const unionType = new UnionType(new NumberType(), new ConstType("a"))

    it('parsing successful unionType', () => {
        expect(unionType.isValidValue(1)).toBeTruthy(),
        expect(unionType.isValidValue("a")).toBeTruthy()
    })

    it('parsing unsuccessful unionType', () => {
        expect(unionType.isValidValue(1n)).toBeFalsy(),
        expect(unionType.isValidValue("b")).toBeFalsy()
    })

    const unionTypeObjects = new UnionType(new NumberType(), new ObjectType({
        name: new StringType(),
    }))


    it('parsing successful unionType objects', () => {
        expect(unionTypeObjects.isValidValue(1)).toBeTruthy(),
            expect(unionTypeObjects.isValidValue({
            name: "john"
        })).toBeTruthy()
    })


})
