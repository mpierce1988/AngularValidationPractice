export class Guest {
    public id: number;
    public firstName : string;
    public lastName : string;
    public birthDate : Date;
    public isVIP : boolean;

    public constructor(id:number, firstName : string, lastName : string, birthDate : Date, isVIP : boolean) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.isVIP = isVIP;
    }
}
