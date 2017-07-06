import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';  //路由参数
import { Location } from "@angular/common";
import { HeroService } from "./hero.service";
import {Hero} from './hero';
import 'rxjs/add/operator/switchMap';
@Component({
    selector: "hero-detail",
    templateUrl:"hero_detail.component.html"
})
export class  HeroDetailComponent implements OnInit{
    constructor(private heroservice:HeroService,private route: ActivatedRoute,private location:Location){}
    @Input()hero:Hero;
    ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.heroservice.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }


}