import { SiUnit } from "./SiUnit"

describe('SIUnit Type test', () => {

    it('Correct array types test', () => {
        expect(new SiUnit({ l: 10 }).getValue()).toMatchObject({ l: 10, w: 0, t: 0, a: 0, te: 0, s: 0, lu: 0 })
        expect(new SiUnit({ l: 10, t: 20 }).getValue()).toMatchObject({ l: 10, w: 0, t: 20, a: 0, te: 0, s: 0, lu: 0 })
        expect(new SiUnit(SiUnit.None).getValue()).toMatchObject({ l: 0, w: 0, t: 0, a: 0, te: 0, s: 0, lu: 0 })

    })

    it('Multiplication Test', () => {
        expect(new SiUnit({ l: 10 }).multiply(new SiUnit({ t: 20 })).getValue()).toMatchObject({ l: 10, w: 0, t: 20, a: 0, te: 0, s: 0, lu: 0 })
        expect(new SiUnit({ l: 10 }).multiply(new SiUnit(SiUnit.None)).getValue()).toMatchObject(new SiUnit({ l: 10 }).getValue())

    })

    it('Power Test', () => {
        expect(new SiUnit({ l: 10 }).power(2).getValue()).toMatchObject({ l: 20, w: 0, t: 0, a: 0, te: 0, s: 0, lu: 0 })
        expect(new SiUnit({ l: 10, w: 90, lu:100 }).power(10).getValue()).toMatchObject({ l: 100, w: 900, t: 0, a: 0, te: 0, s: 0, lu: 1000})
    })

})