import { ValueType } from "../meta/ValueType";

export declare const runtimeObjectSymbol: unique symbol;

export class ObjectType<T extends {
    [_: string]: ValueType
}> extends ValueType {

    private [runtimeObjectSymbol]: void;

    constructor(protected readonly objectType: T) {
        super()
    }


    isValidValue(value: unknown): boolean {
        return typeof value === 'object' && value !== null &&
            Object.keys(this.objectType)
                .every((val) =>
                    (value.hasOwnProperty(val) && this.objectType[val].isValidValue(value[val as keyof object]))
                    || this.objectType[val].isOptional());
    }

    static verifyEquality(v1: unknown, v2: unknown): boolean {
        if (v1 === null && v2 === null) return true;
        if (v1 === null || v2 === null) return false;
        if (typeof v1 !== "object" || typeof v2 !== "boolean") {
            return false;
        }
        return Object.keys(v1)
            .every((val) => {
                v2.hasOwnProperty(val) && ValueType.verifyEquality(v1, v2)
            })
    }

}