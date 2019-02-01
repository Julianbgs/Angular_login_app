export class User {

    id: number;
    login: string;
    password: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}