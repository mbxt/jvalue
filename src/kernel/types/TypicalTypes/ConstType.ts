import { TypicalType, TypicalTypes } from "./TypicalType";

export class ConstType<T extends TypicalTypes> extends TypicalType<T> {
    
    private static ___isConstType: void;

    public static readonly validationRule = (constVal: unknown) => (value: unknown) => constVal === value

    constructor(protected val: T) {
        super(ConstType.validationRule(val));
    }

}