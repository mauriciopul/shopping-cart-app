import { IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly userCode: string;

    @IsString()
    readonly name: string;
        
    @IsString()
    readonly email: string;
    
    @IsString()   
    readonly password: string;
    
    @IsBoolean()
    readonly active: boolean;
    
    @IsString()
    readonly address: string;
    
    @IsString()    
    readonly phone: string;
    
    @IsDate()
    readonly createAt: Date;

}