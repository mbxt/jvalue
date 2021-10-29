import { ValueType } from "../../kernel/meta/ValueType";
import { SiUnit } from "./SiUnit";

export class SiUnitType extends ValueType {

    constructor(protected readonly sunit: SiUnit) {
        super();
    }


    isValidValue(value: SiUnit): boolean {
        return this.sunit.equalTo(value);
    }

}
