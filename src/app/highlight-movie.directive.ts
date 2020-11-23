import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMovie]'
})
export class HighlightMovieDirective {

  @HostBinding('style.boxShadow') myBoxShadow:string;
  @HostBinding('style.transform') myBoxScale:string;
  @HostBinding('style.transition') myBoxTransition:string;
  

  constructor() {}

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myBoxShadow = '-2px 3px 41px 10px rgba(0,0,0,0.31)';
    this.myBoxScale = 'scale(1.008)';
    this.myBoxTransition = 'ease 0.2s';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBoxShadow = '-2px 3px 15px 0px rgba(0,0,0,0.29)';
    this.myBoxScale = 'scale(1)';
    this.myBoxTransition = 'ease 0.2s';
  }
}
