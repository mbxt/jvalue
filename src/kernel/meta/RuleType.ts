import { ___InternalRegisteredValues } from "../rules";
import { IRule } from "../rules/IRule";
import { MetaType } from "./MetalevelType";

export class RuleType extends MetaType {

    private static rules: {
        [k: string]: Readonly<IRuleConstructor>
    } = {};

    public static a: IRule<any>[];

    public static domainRules: typeof ___InternalRegisteredValues


    serialize(value: MetaType): String {
        throw new Error("Method not implemented.");
    }

}


let a: typeof RuleType.domainRules

new a.LowerRangeRestriction(1, 2)
