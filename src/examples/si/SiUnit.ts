import { ValueObject } from "../../kernel/meta/ValueObject";
import { ValueType } from "../../kernel/meta/ValueType";

export class SiUnit extends ValueObject {

    public static readonly None: Units = { l: 0, w: 0, t: 0, a: 0, te: 0, s: 0, lu: 0 }

    public static readonly l: SiUnit = new SiUnit({ l: 1 })
    public static readonly t: SiUnit = new SiUnit({ t: 1 })
    public static readonly w: SiUnit = new SiUnit({ w: 1 })
    public static readonly a: SiUnit = new SiUnit({ a: 1 })
    public static readonly te: SiUnit = new SiUnit({ te: 1 })
    public static readonly s: SiUnit = new SiUnit({ s: 1 })
    public static readonly lu: SiUnit = new SiUnit({ lu: 1 })


    constructor(value: Partial<Units>) {
        super({ ...SiUnit.None, ...value } as Units)
    }

    multiply(other: SiUnit): SiUnit {
        let tmp = { ...SiUnit.None };
        Object.getOwnPropertyNames(tmp).forEach(key => {
            tmp[key as keyof typeof tmp] = this.getValue()[key as keyof typeof tmp]
                + other.getValue()[key as keyof typeof tmp]
        });
        return new SiUnit(tmp as Units);
    }

    divide(other: SiUnit): SiUnit {
        let tmp = { ...SiUnit.None };
        Object.getOwnPropertyNames(tmp).forEach(key => {
            tmp[key as keyof typeof tmp] = this.getValue()[key as keyof typeof tmp]
                - other.getValue()[key as keyof typeof tmp]
        });

        return new SiUnit(tmp as Units);
    }

    power(p: number) {
        let tmp = { ...SiUnit.None };
        Object.getOwnPropertyNames(tmp).forEach((key) => {
            tmp[key as keyof typeof SiUnit.None] = this.getValue()[key as keyof typeof SiUnit.None] * p
        })
        return new SiUnit(tmp as Units)
    }

    public getValue(): Units {
        return this.value as Units
    }

    serialize(): string {
        return JSON.stringify(this)
    }

}

type Units = {
    readonly l: number;
    readonly w: number;
    readonly t: number;
    readonly a: number;
    readonly te: number;
    readonly s: number;
    readonly lu: number;
}
