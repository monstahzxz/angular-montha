export class User {
    constructor(public username: string, public password: string) { }

}
export interface Verify {
    isVerified: boolean
}
