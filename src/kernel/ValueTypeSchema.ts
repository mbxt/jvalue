import { TypicalType } from "./types/TypicalTypes/TypicalType";
import { UnionType } from "./types/UnionType";
import { ObjectType } from "./types/ObjectType";
import { IsOptionalType } from "./meta/ValueType";

class ValueType {

    public static inferSchema<T extends ObjectType<any> |
        UnionType<any> |
        TypicalType<any>>(schema: T) {
        return schema;
    }



    public static createValueType<T extends ObjectType<any>>(schema: T) {

    }


}


type GetValueTypeParameter<T> = T extends TypicalType<infer u> ? u :
                                T extends ObjectType<any> ? {} : never;

type schemaType<u> = u extends ObjectType<infer y> ? schemaTypeHelper<y> : never

type getTypeHelper<A> = A extends TypicalType<infer l> ? l : never

type schemaTypeHelper<T extends {}> = {
    [K in keyof T]: T[K] extends IsOptionalType<TypicalType<infer u>> ? Partial<u> :
    T[K] extends UnionType<infer u> ? getTypeHelper<u[number]> :
    T[K] extends TypicalType<infer u> ? u :
    T[K] extends ObjectType<infer y> ? schemaTypeHelper<y> : never;
}

class other {
    public static readonly sub: Abs[] = []
}

abstract class foo<T> {
    protected value!: T;
}

class Abs extends foo<other> {
    public static readonly sub: Abs[] = []
}

interface F {}

type getApplicableClass<T> = T extends foo<infer u> ? u : "string"

let c: getApplicableClass<Abs>