"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cats_entity_1 = require("./entity/cats.entity");
const typeorm_2 = require("typeorm");
let CatsService = class CatsService {
    constructor(catsRepository) {
        this.catsRepository = catsRepository;
    }
    async findOne(id) {
        const catEntity = await this.catsRepository.findOne({ where: { id: id } });
        const catDto = {
            name: catEntity.name,
            breed: catEntity.breed
        };
        return catDto;
    }
    async findAll() {
        const catEntities = await this.catsRepository.find();
        const catDtos = catEntities.map(catEntity => ({
            name: catEntity.name,
            breed: catEntity.breed
        }));
        console.log(catDtos);
        return catDtos;
    }
    async create(createCatDto) {
        const cat = new cats_entity_1.Cat();
        cat.name = createCatDto.name;
        cat.age = createCatDto.age;
        cat.breed = createCatDto.breed;
        await this.catsRepository.save(cat);
        const result = {
            name: cat.name,
            breed: cat.breed
        };
        return result;
    }
    async update(id, cat) {
        const existedCat = await this.findOne(id);
        if (existedCat) {
            await this.catsRepository
                .createQueryBuilder()
                .update(cats_entity_1.Cat)
                .set(cat)
                .where("id = :id", { id })
                .execute();
        }
        else {
            throw new Error("cat not found!");
        }
    }
    async reomove(id) {
        await this.catsRepository.delete(id);
    }
};
exports.CatsService = CatsService;
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cats_entity_1.Cat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CatsService);
//# sourceMappingURL=cats.service.js.map