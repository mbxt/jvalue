import { NumberType } from "../types/TypicalTypes/NumberType";
import { IRule } from "./IRule";

export class UpperRangeRestriction extends IRule<typeof NumberType> {

    static errorMessage = "{$value} must be greater than {$this.lowerRange}";

    evaluate(value: unknown): boolean {
        return this.included ? (value as string | number) >= this.upperRange : (value as string | number) > this.upperRange;
    }

    constructor(protected readonly upperRange: number | string,
        protected readonly included: boolean = false) {
        super()
    }

    none?: typeof NumberType | undefined;

    serialize(): string {
        return JSON.stringify({
            "UpperRangeRestriction": [this.upperRange, this.included]
        })
    }

}