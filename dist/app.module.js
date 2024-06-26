"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const morgan_1 = require("@nest-middlewares/morgan");
const cats_module_1 = require("./cats/cats.module");
const typeorm_1 = require("@nestjs/typeorm");
const cats_entity_1 = require("./cats/entity/cats.entity");
let AppModule = class AppModule {
    configure(consumer) {
        morgan_1.MorganMiddleware.configure('dev');
        consumer
            .apply(morgan_1.MorganMiddleware)
            .forRoutes('cats');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 13306,
                username: 'root',
                password: 'root',
                database: 'test',
                entities: [cats_entity_1.Cat],
                synchronize: true,
            }),
            cats_module_1.CatsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map