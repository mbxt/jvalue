import { MetaType } from "../meta/MetalevelType";
import { NumberType } from "../types/TypicalTypes/NumberType";
import { IRule } from "./IRule";

export class WholeNumberRestriction<T extends number> extends IRule<typeof NumberType> {

    evaluate(value: unknown): boolean {
        return Number.isInteger(value);
    }

    constructor() {
        super()
    }

    serialize(): String {
        return JSON.stringify({
            "WholeNumberRestriction": true
        })
    }
}