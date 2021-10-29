import { IRule } from "../rules/IRule";

export declare const runtimeValueType: unique symbol;
export declare const runtimeOptionalSymbol: unique symbol;



export abstract class ValueType {

    private rules: IRule<any>[] = [];

    protected optional = false;

    public makeOptional(): IsOptionalType<this> {
        this.optional = true;
        return this as IsOptionalType<this>;
    }

    abstract isValidValue(value: unknown): boolean;

    public isOptional(): boolean {
        return this.optional
    }

    public withRule(rule: IRule<any>) {
        this.rules.push(rule)
        return this
    }

    public evalRules(value: unknown) {
        return this.rules.every((rule) => rule.evaluate(value))
    }

    static verifyEquality(v1: unknown, v2: unknown): boolean {
        let result: boolean;
        switch (typeof v1) {
            case "number":
                result = Object.is(v1, v2)
                break;
            case "string":
                result = Object.is(v1, v2)
                break;
            case "boolean":
                result = v1 === v2
                break;
            case "object":
                result = this.checkObjectTypeEquality(v1, v2)
                break;
            default:
                result = false;
        }
        return result;
    }

    private static checkObjectTypeEquality(v1: unknown, v2: unknown): boolean {
        if (v1 === null && v2 === null) return true;
        if (v1 === null || v2 === null) return false;
        if (typeof v1 !== "object" || typeof v2 !== "object") {
            return false;
        }
        if (Array.isArray(v1)) return this.checkArrayEquality(v1, v2)
        return Object.keys(v1)
            .every((val) => {
                v2.hasOwnProperty(val) && ValueType.verifyEquality(v1, v2)
            })
    }

    private static checkArrayEquality(v1: unknown, v2: unknown) {
        if (!Array.isArray(v1) || !Array.isArray(v2)) {
            return false;
        }
        if (v1.length != v2.length) return false;
        for (let index = 0; index < v1.length; index++) {
            if (!this.verifyEquality(v1[index], v2[index])) {
                return false;
            }
        }
        return true;
    }

}


export declare type IsOptionalType<T extends ValueType> = T & {
    [runtimeOptionalSymbol]: true
}



// type RestrictableValueType<T extends typeof ___InternalRegisteredValues, U extends ValueType> = {
//     [k in keyof T]:
//     (...args: ConstructorParameters<T[k]>) =>
//         RestrictableValueType<T, U> & {
//             restrictions: [
//                 {
//                     args: typeof args,
//                     class: T[k]
//                 }
//             ]
//         }
// }

// let i: asRestrictedType<typeof NumberType>

// type testing = RestrictableValueType<applicable<typeof NumberType>, NumberType>

// type testing2 = RestrictableValueType<applicable<typeof BooleanType>, BooleanType>


// let l: testing = new NumberType() as testing

// let o: testing2 = new BooleanType() as testing2

// let oo = l.withsLowerBoundRestriction()
// o.
