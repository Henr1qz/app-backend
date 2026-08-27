import { IsNotEmpty, IsNumber, IsString, Length, Min } from "class-validator";


export class CreatePlansDTO {
    @IsNotEmpty()
    @IsString()
    @Length(2, 120)
    name: string = "";

    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    price!: number;
}