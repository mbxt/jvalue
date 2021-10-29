import { ValueType } from "../meta/ValueType";
import { BooleanType } from "../types/TypicalTypes/BooleanType";
import { NumberType } from "../types/TypicalTypes/NumberType";
import { IRule } from "./IRule";
import { LowerRangeRestriction } from "./LowerRangeRestriction";
import { UpperRangeRestriction } from "./UpperRangeRestriction";


// export type DropNotApplicableRules<L, B extends typeof ValueType, O extends keyof L> = Pick<L, InstanceType<L[O]> extends IRule<B> ? O : never>

// export type applicable<T extends typeof ValueType> = Pick<typeof ___InternalRegisteredValues, {
//     [k in keyof typeof ___InternalRegisteredValues]: InstanceType<typeof ___InternalRegisteredValues[k]> extends IRule<T> ? k : never
// }[keyof typeof ___InternalRegisteredValues]>


// export const ___InternalRegisteredValues = {
//     withsLowerBoundRestriction: LowerRangeRestriction,
//     withsUpperRangeRestriction: UpperRangeRestriction,
// } as const




