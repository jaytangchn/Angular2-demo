/**
 * 独立的路由模块
 */
import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";   //导入路由

import { DashboardComponent } from "./dashboard.component";  
import { HeroDetailComponent } from "./hero_detail.component";
import { HeroesComponent } from "./heroes.component";

const router : Routes  = [
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',                  //将'/'重定向到'/dashboard'
        pathMatch:'full'
      },
      {
        path:'detail/:id',
        component:HeroDetailComponent
      }
]; 
@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class AppRoutingMoudle{

}