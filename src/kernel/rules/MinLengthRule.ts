import { StringType } from "../types/TypicalTypes/StringType";
import { TypicalTypes } from "../types/TypicalTypes/TypicalType";
import { IRule } from "./IRule";

export class MinLengthRule<T extends string | TypicalTypes[]> extends IRule<typeof StringType> {

    evaluate(value: T): boolean {
        return value.length >= this.minLength;
    }

    constructor(protected readonly minLength: number) {
        super()
    }

    serialize(): String {
        return JSON.stringify({
            "MinLengthRule": this.minLength
        })
    }
}