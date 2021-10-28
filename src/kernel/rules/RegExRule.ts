import { StringType } from "../types/TypicalTypes/StringType";
import { IRule } from "./IRule";

export class RegExRule<T extends string> extends IRule<typeof StringType> {

    evaluate(value: T): boolean {
        return this.regEx.test(value);
    }

    constructor(protected readonly regEx: RegExp) {
        super()
    }

    serialize(): String {
        return JSON.stringify({
            "MinLengthRule": this.regEx
        })
    }
}