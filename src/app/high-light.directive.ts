import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({ selector : '[myHighlight]'})
export class HighLightDirective{
    @Input('myHighlight') highlightColor:string;
        constructor(private el: ElementRef){
    }
    @Input('') defaultColor : string;

    private highlight(color: string){
        this.el.nativeElement.style.backgroundColor= color;
    }
    @HostListener('mouseenter') onmouseenter(){
        this.highlight(this.highlightColor || this.defaultColor ||  'yellow');
    }
    @HostListener('mouseleave') onmouseleave(){
        this.highlight('');
    }
}