import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePlansDTO } from 'src/dtos/create-plans-dto';
import { UpdatePlansDto } from 'src/dtos/update-plans-dto';

@Injectable()
export class PlansService {

        constructor(private prisma: PrismaService) {
    
        }
    
        async create(dto: CreatePlansDTO) {
            await this.prisma.plan.create({
                data:{
                    name: dto.name,
                    price: dto.price
            }});
        }

        async findAll(){
            const plan = await this.prisma.plan.findMany();
            return plan;
        }
        async findOne(id: number){
            const plan = await this.prisma.plan.findUnique({where:{id}});
            return {
                id: plan?.id,
                nome: plan?.name,
                preco: plan?.price
            }
        }
        async update(id:number, dto: UpdatePlansDto){
            const plan = await this.prisma.plan.findUnique({
            where: { id }
        });
            if (!plan) throw new NotFoundException('Plano não encontrado.');
            await this.prisma.plan.update({
            where: { id }, data: {
                name: dto.name,
                price: dto.price
            }
        });
        }
        async del(id: number): Promise<void>{
            await this.prisma.plan.delete({where: {id}});
        }
}
