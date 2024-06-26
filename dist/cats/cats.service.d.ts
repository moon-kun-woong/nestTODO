import { Cat } from './entity/cats.entity';
import { Repository } from 'typeorm';
import { CatDTO } from './dto/cat.dto';
import { CreateCatDTO } from './dto/cat.createCatDto';
export declare class CatsService {
    private catsRepository;
    constructor(catsRepository: Repository<Cat>);
    findOne(id: number): Promise<CatDTO>;
    findAll(): Promise<CatDTO[]>;
    create(createCatDto: CreateCatDTO): Promise<CatDTO>;
    update(id: number, cat: Cat): Promise<void>;
    reomove(id: number): Promise<void>;
}
