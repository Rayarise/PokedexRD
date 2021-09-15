import {custom, JSONObject, optional, required} from 'ts-json-object'

export class Pokemon extends JSONObject {
    @optional
    id!:number;

    @optional
    name!: any;

    @optional
    sprite!: any;

    @optional
    type1!: any;
    @optional
    type2!: any;
}
