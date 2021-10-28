import { TypicalType } from "./TypicalType";

export declare const runtimeBooleanType: unique symbol;

    export class BooleanType extends TypicalType<boolean> {

    private static ___isBooleanType: void;

    public static readonly validationRule = (value: unknown) => typeof value === "boolean"

    constructor() {
        super(BooleanType.validationRule);
    }

}