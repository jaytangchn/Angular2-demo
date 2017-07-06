import { Injectable } from '@angular/core';
import { HEROES } from './mock_heroes';
import { Hero } from './hero';

//导出服务
@Injectable()      //当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。
export class HeroService{
    /*
    返回英雄数组
     */
    getHeroes():Promise<Hero[]>{   //Promise 承诺它是一种异步技术，它会改变getHeroes()方法的签名。
        return Promise.resolve(HEROES);
    }
    /*
    根据id获取当个英雄
    */
    getHero(id: number): Promise<Hero> {
    return this.getHeroes()
                .then(heroes => heroes.find(hero => hero.id === id));
    }

}