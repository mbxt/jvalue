import { MinLengthRule } from "../rules/MinLengthRule"
import { ObjectType } from "./ObjectType"
import { NumberType } from "./TypicalTypes/NumberType"
import { StringType } from "./TypicalTypes/StringType"

describe('Test ObjectType', () => {
    const objVal = new ObjectType({
        firstName: new StringType(),
        lastName: new StringType().withRule(new MinLengthRule(3))
    })

    it('parsing successful objectType', () => {
        expect(objVal.isValidValue({
            firstName: "john",
            lastName: "doe"
        })).toBeTruthy()
    })

    it('parsing wrong objectType', () => {
        expect(objVal.isValidValue({
            firstName: "john",
            lastName: "do"
        })).toBeFalsy()
        expect(objVal.isValidValue({
            firstNamie: "john",
            lastName: "do"
        })).toBeFalsy()
        expect(objVal.isValidValue({
            firstName: 42,
            lastName: "do"
        })).toBeFalsy(),
        expect(objVal.isValidValue({})).toBeFalsy()
    })

    const objValOptional = new ObjectType({
        firstName: new StringType().makeOptional(),
        lastName: new StringType().withRule(new MinLengthRule(3)).makeOptional()
    })

    it('parsing successful objectType', () => {
        expect(objValOptional.isValidValue({
            firstName: "john",
            lastName: "doe"
        })).toBeTruthy()
        expect(objValOptional.isValidValue({})).toBeTruthy()
        expect(objValOptional.isValidValue({
            firstName: "john"
        })).toBeTruthy()
    })

    const nestedObjectType = new ObjectType({
        name: new ObjectType({
            green: new NumberType()
        })
    })

    it('parsing successful nestedObjectType', () => {
        expect(nestedObjectType.isValidValue({
            name : {
                green: 12
            }
        })).toBeTruthy()
    })

})
