import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/get")
  getText(): string{
    return "dddddddddddd"
  }

  @Get("/get/ddd")
  findAll(@Req() request: Request): string {
    const ss = request.query.foo
    console.log(ss)
    const condition = true;
    const promise = new Promise((resolve, reject)=> {
      if(condition){
        resolve("성공");
      } else {
        reject("실패");
      }
    });

    promise
      .then((ss)=>{
        console.log(ss);
      })
      .catch((error)=>{
        console.log(error);
      })
      .finally(()=>{
        console.log("Promise Final Message");
      })

    return `
    <h1>자 리퀘스트 받아볼까?</h1>
    <form action = "/get/ddd">
      <input type="text" name="foo">
      <button>써밋이다</button>
    </form>
    `+request.query.foo;
  }
}
