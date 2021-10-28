import { TypicalType } from "./TypicalType";

declare const runtimeNumberType: unique symbol;

export class NumberType extends TypicalType<number> {

    private static ___isNumberType: void;

    public static readonly validationRule = (value: unknown) => typeof value === "number" 

    constructor() {
        super(NumberType.validationRule);
    }

}
