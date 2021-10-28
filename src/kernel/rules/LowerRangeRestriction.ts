import { MetaType } from "../meta/MetalevelType";
import { ValueType } from "../meta/ValueType";
import { NumberType } from "../types/TypicalTypes/NumberType";
import { StringType } from "../types/TypicalTypes/StringType";
import { IRule } from "./IRule";

export class LowerRangeRestriction extends IRule<typeof NumberType> {

    errorMessage = "{$value} must be smaller than {$this.lowerRange}";

    evaluate(value: unknown): boolean {
        return this.isIncluded ? (value as string | number) >= this.lowerRange : (value as string | number) > this.lowerRange;
    }

    constructor(protected lowerRange: number | string, protected isIncluded = false) {
        super()
    }


    serialize(): string {
        return JSON.stringify({
            "LowerRangeRestriction": [this.lowerRange, this.isIncluded]
        })
    }

}
