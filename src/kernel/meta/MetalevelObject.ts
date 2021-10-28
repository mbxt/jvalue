export abstract class MetaObject {
    abstract serialize(value: unknown): String;
    abstract equalTo(other: MetaObject): boolean;
}
