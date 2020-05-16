export class User {
    constructor(public username: string, public password: string) { }

}
export interface Verify {
    isVerified: boolean
}

export interface Attendance {
    str: number;
    hrs: number;
    abs: Array<any>
}
