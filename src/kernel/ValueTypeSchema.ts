import { TypicalType } from "./types/TypicalTypes/TypicalType";
import { UnionType } from "./types/UnionType";
import { ObjectType } from "./types/ObjectType";
import { IsOptionalType } from "./meta/ValueType";
import { StringType } from "./types/TypicalTypes/StringType";
import { NumberType } from "./types/TypicalTypes/NumberType";

let c = new ObjectType({
    firstName: new StringType(),
    lastName: new StringType(),
    age: new NumberType()
})

type schemaType<u> = u extends ObjectType<infer y> ? schemaTypeHelper<y> : never

const test: schemaType<typeof c>

//infers 
//const test: schemaTypeHelper<{
//    firstName: StringType;
//    lastName: StringType;
//    age: NumberType;
//}>
type getTypeHelper<A> = A extends TypicalType<infer l> ? l : never

type schemaTypeHelper<T extends {}> = {
    [K in keyof T]: T[K] extends IsOptionalType<TypicalType<infer u>> ? Partial<u> :
    T[K] extends UnionType<infer u> ? getTypeHelper<u[number]> :
    T[K] extends TypicalType<infer u> ? u :
    T[K] extends ObjectType<infer y> ? schemaTypeHelper<y> : never;
}
