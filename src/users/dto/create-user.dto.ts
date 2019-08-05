export class CreateUserDto {

    readonly codigoUsuario: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly active: boolean;
    readonly address: string;
    readonly phone: string;
    readonly createAt: Date;

}