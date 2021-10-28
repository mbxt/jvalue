import { ValueType } from "../meta/ValueType";

export abstract class IRule<T extends typeof ValueType> {

    private x: any;

    ____unused(toppings: T) {}

    abstract evaluate(value: unknown): boolean;

}
