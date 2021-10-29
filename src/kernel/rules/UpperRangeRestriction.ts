import { NumberType } from "../types/TypicalTypes/NumberType";
import { IRule } from "./IRule";

export class UpperRangeRestriction extends IRule<typeof NumberType> {

    // static errorMessage = "{$value} must be lower than {$this.lowerRange}";

    evaluate(value: number): boolean {
        return this.included ? value <= this.upperRange : value < this.upperRange;
    }

    constructor(protected readonly upperRange: number,
        protected readonly included: boolean = false) {
        super()
    }

    serialize(): string {
        return JSON.stringify({
            "UpperRangeRestriction": [this.upperRange, this.included]
        })
    }

}