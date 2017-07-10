import { Component } from "@angular/core";

import { Hero } from "./hero";

@Component({
    selector:"hero-form",
    templateUrl:"./hero-form.component.html"
})

export class HeroFormComponent{
    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
    model = new Hero(1,'jay','123456',this.powers[0],'false');
    submitted = false;
    onSubmit(){
        this.submitted = true;
    };
    get diagnostic() { 
        return JSON.stringify(this.model); 
    }
}