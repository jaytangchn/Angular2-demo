import { Injectable } from '@angular/core';
import { HEROES } from './mock_heroes';
import { Hero } from './hero';

//导出服务
@Injectable()      //当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。
export class HeroService{
    getHeroes():Hero[]{
        return HEROES;
    }
}