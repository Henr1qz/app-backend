import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PlansService } from './plans.service';
import { CreatePlansDTO } from 'src/dtos/create-plans-dto';
import { UpdatePlansDto } from 'src/dtos/update-plans-dto';
@Controller('plans')
export class PlansController {

    constructor(private plansService: PlansService){}
    @Post()
    async create(@Body() dto: CreatePlansDTO){
        return await this.plansService.create(dto);
    }
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number){
        return await this.plansService.findOne(id);
    }
    @Get()
    async findAll(){
        return await this.plansService.findAll();
    }
    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatePlansDto,
){
    return this.plansService.update(id, dto);
}
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.plansService.del(id);
    }
    
}
