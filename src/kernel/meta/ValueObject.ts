import { MetaObject } from "./MetalevelObject";
import { ValueType } from "./ValueType";

export abstract class ValueObject extends MetaObject {

    protected readonly value: Readonly<any>;

    constructor(value: unknown) {
        super();
        this.value = Object.freeze(value)
    }

    equalTo(other: ValueObject): boolean {
        return ValueType.verifyEquality(this.value, other.value)
    }

}