import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entity/cats.entity';
import { Repository } from 'typeorm';
import { CatDTO } from './dto/cat.dto';
import { CreateCatDTO } from './dto/cat.createCatDto';

@Injectable()
export class CatsService {
    constructor(
        @InjectRepository(Cat)
        private catsRepository: Repository<Cat>,
    ) { }

    async findOne(id: number): Promise<CatDTO> {
        const catEntity = await this.catsRepository.findOne({ where: { id: id } });
        const catDto: CatDTO = {
            name: catEntity.name,
            breed: catEntity.breed
        };
        return catDto;
    }

    async findAll(): Promise<CatDTO[]> {
        const catEntities = await this.catsRepository.find();
        const catDtos = catEntities.map(catEntity =>({
            name: catEntity.name,
            breed: catEntity.breed
        }));
        console.log(catDtos);
        return catDtos;
    }

    async create(createCatDto: CreateCatDTO): Promise<CatDTO> {
        const cat = new Cat();
        cat.name = createCatDto.name;
        cat.age = createCatDto.age;
        cat.breed = createCatDto.breed;
        await this.catsRepository.save(cat);
        
        const result : CatDTO = {
            name : cat.name,
            breed : cat.breed
        }
        return result;
    }

    async update(id: number, cat: Cat): Promise<void> {
        const existedCat = await this.findOne(id)
        if (existedCat) {
            await this.catsRepository
                .createQueryBuilder()
                .update(Cat)
                .set(cat)
                .where("id = :id", { id })
                .execute();
        } else {
            throw new Error("cat not found!");
        }
    }

    async reomove(id: number): Promise<void> {
        await this.catsRepository.delete(id);
    }
}
