import { Cat } from './entity/cats.entity';
import { Repository } from 'typeorm';
export declare class CatsService {
    private catsRepository;
    constructor(catsRepository: Repository<Cat>);
    findAll(): Promise<Cat[]>;
    findOne(id: number): Promise<Cat>;
    create(cat: Cat): Promise<void>;
    reomove(id: number): Promise<void>;
    update(id: number, cat: Cat): Promise<void>;
}
