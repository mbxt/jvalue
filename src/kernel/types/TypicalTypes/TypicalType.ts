import { ValueType } from "../../meta/ValueType";

export type TypicalTypes = number | string | boolean | bigint | TypicalType<TypicalTypes>[];
export declare const runtimeLiteralType: unique symbol; 

/**
 * @class TypicalType
 * @description An abstract class that is directly implemented with the sub classes validation rules  
 */

export abstract class TypicalType<T extends TypicalTypes> extends ValueType {

    /**
     * @property [runtimeLiteralType]
     * @desc a unique symbol that makes other potential classes with the same structure to be not compatible
     */

    protected optional: boolean = false;

    /**
     * @constructor
     * @param validationRule A validation rule that subclasses have to provide, often just a typeof check 
    */
    constructor(protected readonly validationRule: (x: unknown) => boolean) {
        super();
    }

    isValidValue(value: unknown): value is TypicalType<T> {
        return this.validationRule(value) && this.evalRules(value)
    }

    public getOptional() {
        return this.optional;
    }

    serialize(value: TypicalType<T>): string {
        return JSON.stringify(value)
    }

    equalValues(value1: unknown, value2: unknown): boolean {
        if(!this.isValidValue(value1) || !this.isValidValue(value2)) {
            return false;
        }
        return Object.is(value1, value2);
    }
    
}