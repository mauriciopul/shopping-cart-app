export class CreateUserDto {

    readonly userCode: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly active: boolean;
    readonly address: string;
    readonly phone: string;
    readonly createAt: Date;

}