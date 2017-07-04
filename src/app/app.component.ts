import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})
export class AppComponent {
  constructor(private heroService: HeroService){}
  title = 'Tour of Heroes';
  heroes: Hero[];
  
  hero: Hero;
  onSelect(h:Hero):void{
    this.hero = h;
  }
  // hero = {
  //       id:1,
  //       name:"Windstorm"
  //     }
}



