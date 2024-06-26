import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';
import { CatDTO } from './dto/cat.dto';
import { CreateCatDTO } from './dto/cat.createCatDto';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    findOne(id: number): Promise<CatDTO>;
    findAll(): Promise<CatDTO[]>;
    create(createCatDto: CreateCatDTO): Promise<CatDTO>;
    update(id: number, cat: Cat): string;
    remove(id: number): void;
}
