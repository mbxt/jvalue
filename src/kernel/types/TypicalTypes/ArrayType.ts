import { TypicalType, TypicalTypes } from "./TypicalType";

export class ArrayType<T extends TypicalTypes> extends TypicalType<TypicalType<T>[]> {

    private static ___isArrayType: void;

    constructor(typicalType: TypicalType<T>) {
        super((value: unknown) => Array.isArray(value)
            && (value as any[]).every((val) =>typicalType.isValidValue(val)));
    }
    
}