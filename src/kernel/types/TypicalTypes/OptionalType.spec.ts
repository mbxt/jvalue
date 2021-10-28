import { ArrayType } from "./ArrayType"
import { BooleanType } from "./BooleanType"
import { ConstType } from "./ConstType"
import { NumberType } from "./NumberType"
import { StringType } from "./StringType"

describe('Test OptionalType', () => {

    it('made successfull optional typical values', () => {
        const a = new NumberType()
        const b = new BooleanType()
        const c = new StringType()
        const d = new ConstType("a")
        const e = new ArrayType(new StringType())

        expect(a.makeOptional().isOptional()).toBeTruthy()
        expect(b.makeOptional().isOptional()).toBeTruthy()
        expect(c.makeOptional().isOptional()).toBeTruthy()
        expect(d.makeOptional().isOptional()).toBeTruthy()
        expect(e.makeOptional().isOptional()).toBeTruthy()

    })
})