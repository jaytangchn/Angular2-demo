/*默认导入
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { FormsModule} from '@angular/forms';          //导入ng-model
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero_detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule          // 绑定ngModel前导入此模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
