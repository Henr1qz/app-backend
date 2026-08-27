import { IsOptional, IsString, Length, IsDateString, IsUrl, MaxLength, IsNumber, Min } from
    'class-validator';
export class UpdatePlansDto {
    
        @IsOptional()
        @IsString()
        @Length(2, 120)
        name?: string;
    
        @IsOptional()
        @IsNumber({ maxDecimalPlaces: 2 })
        @Min(0)
        price!: number;

}