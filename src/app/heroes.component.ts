import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class HeroesComponent implements OnInit  {
  title = 'Tour of Heroes';
  heroes: Hero[];
  hero: Hero;
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);  //使用箭头表达式能优雅的处理 this 指针。
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(h:Hero):void{
    this.hero = h;
  }
  // hero = {
  //       id:1,
  //       name:"Windstorm"
  //     }
}



