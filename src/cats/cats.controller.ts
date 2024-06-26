import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';
import { CatDTO } from './dto/cat.dto';
import { CreateCatDTO } from './dto/cat.createCatDto';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { };


    @Get(':id')
    async findOne(@Param('id') id: number): Promise<CatDTO> {
        return await this.catsService.findOne(id);
    }

    @Get()
    async findAll(): Promise<CatDTO[]> {
        return await this.catsService.findAll();
    }

    @Post()
    create(@Body() createCatDto: CreateCatDTO) {
        return this.catsService.create(createCatDto);
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() cat: Cat) {
        this.catsService.update(id, cat);
        return `This action updates a #${id} cat..`
    }

    @Delete(':id')
    remove(@Param("id") id: number) {
        this.catsService.reomove(id);
    }
}
