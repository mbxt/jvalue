import { MaxLengthRule } from "../../rules/MaxLengthRule"
import { MinLengthRule } from "../../rules/MinLengthRule"
import { RegExRule } from "../../rules/RegExRule"
import { StringType } from "./StringType"

describe('Test NumberType', () => {
    const stringType = new StringType()

    it('parsing successful numbers', () => {
        expect(stringType.isValidValue("")).toBeTruthy()
        expect(stringType.isValidValue("yes")).toBeTruthy()
        expect(stringType.isValidValue("no")).toBeTruthy()

    })
    it('parsing usuccessful literals', () => {
        expect(stringType.isValidValue(1)).toBeFalsy()
        expect(stringType.isValidValue([1, 2, 3])).toBeFalsy()
        expect(stringType.isValidValue(false)).toBeFalsy()
        expect(stringType.isValidValue(7n)).toBeFalsy()
    })

    it('parsing withRule regex', () => {
        const ip4regEx: RegExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const regexRuleStringType = new StringType().withRule(new RegExRule(ip4regEx))
        expect(regexRuleStringType.isValidValue("1")).toBeFalsy()
        expect(regexRuleStringType.isValidValue("1.2.3")).toBeFalsy()
        expect(regexRuleStringType.isValidValue("192.168.178.1")).toBeTruthy()
        expect(regexRuleStringType.isValidValue("192.168.178.2")).toBeTruthy()
    })

    it('parsing withRule maxLength', () => {
        const maxLengthRuleStringType = (new StringType()).withRule(new MaxLengthRule(2))
        expect(maxLengthRuleStringType.isValidValue('1')).toBeTruthy()
        expect(maxLengthRuleStringType.isValidValue('12')).toBeTruthy()
        expect(maxLengthRuleStringType.isValidValue('123')).toBeFalsy()
    })

    it('parsing withRule minLength', () => {
        const maxLengthRuleStringType = (new StringType()).withRule(new MinLengthRule(2))
        expect(maxLengthRuleStringType.isValidValue('1')).toBeFalsy()
        expect(maxLengthRuleStringType.isValidValue('12')).toBeTruthy()
        expect(maxLengthRuleStringType.isValidValue('123')).toBeTruthy()
    })



})