import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';

@Controller('cats')
export class CatsController {
    /* 
    CatService 는 constructor  를 통해 주입된다. 이때 private 을 사용하면 선언과 초기화가 
    동시에 이루어 지기 때문에 private 하는게 좋을 것.
    */
    constructor(private catsService: CatsService){};

    @Get()
    findAll():Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: number): Promise<Cat> {
        return this.catsService.findOne(id);
    }

    @Post()
    create(@Body() cat : Cat){
        return this.catsService.create(cat);
    }
    
    @Delete(':id')
    remove(@Param("id") id: number){
        this.catsService.reomove(id);
    }

    @Put(":id")
    update(@Param("id") id : number, @Body() cat: Cat){
        this.catsService.update(id, cat);
        return `This action updates a #${id} cat..`
    }
}
