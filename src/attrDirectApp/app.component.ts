import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color:string;
  values: string = '';
  value2 = "";
  value3 = "";
  /*
  1. $event的类型
      1). $event 可以写成any类型，
          this.values = event.target.value
      2). 写成 KeyboardEvent 类型。
          this.values = (<HTMLInputElement>event.target).value;
   但不建议把整个 DOM 事件传到方法中，因为这样组件会知道太多模板的信息
   这就违反了模板（用户看到的）和组件（应用如何处理用户数据）之间的分离关注原则。
   建议使用局部模板变量来实现
  */ 
  onKey(event:KeyboardEvent) {
    this.values = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  onEnter(value:string){
    this.value2 = value;
  }
  update(value:string){
    this.value3 = value;
  }
}
