import { ValueType } from "../meta/ValueType";
import { ObjectType } from "./ObjectType";
import { TypicalType, TypicalTypes } from "./TypicalTypes/TypicalType";

export declare const runtimeUnionSymbol: unique symbol;

export class UnionType<T extends (TypicalType<TypicalTypes>|ObjectType<any>)[]> extends ValueType {

    private readonly unionTypes: (TypicalType<TypicalTypes> | ObjectType<any>)[];

    private [runtimeUnionSymbol]: void;

    constructor(...val: T) {
        super()
        this.unionTypes = val
    }

    isValidValue(value: unknown): boolean {
        return this.unionTypes.some((typicalType) => typicalType.isValidValue(value));
    }

}

export declare type IsUnionType<S extends TypicalType<TypicalTypes>|ObjectType<any>[]> = S & {
    [runtimeUnionSymbol]: void
}
