import { TypicalType } from "./TypicalType";

export declare const runtimeStringType: unique symbol;

export class StringType extends TypicalType<string> {

    public static readonly validationRule = (value: unknown) => typeof value === "string";

    constructor() {
        super(StringType.validationRule);
    }

}