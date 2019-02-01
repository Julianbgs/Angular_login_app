export class User {

    id: number;
    login: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confPassword: string;
    checkbox: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}