import { TypicalTypes } from "../types/TypicalTypes/TypicalType";
import { IRule } from "./IRule";

export class MaxLengthRule<T extends string | TypicalTypes[]> extends IRule<any> {

    evaluate(value: T): boolean {
        return value.length <= this.maxLength;
    }

    constructor(protected readonly maxLength: number) {
        super()
    }

    serialize(): String {
        return JSON.stringify({
            "MaxLengthRule": this.maxLength
        })
    }
}