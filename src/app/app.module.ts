/*默认导入 核心模块
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { FormsModule} from '@angular/forms';          //导入ng-model


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero_detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroService }         from './hero.service';

import { AppRoutingMoudle } from "./app-routing.module";      //导入独立的路由模块
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,          // 绑定ngModel前导入此模块
    AppRoutingMoudle
  ],
  declarations: [                                 //声明 组件
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
