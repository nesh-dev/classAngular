import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStrikeThrough]'
})
export class StrikeThroughDirective {
  constructor(private  eleRef: ElementRef, private  renderer: Renderer2) {}

  lineDecorator(action: any) {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'textDecoration',
      action
    );
  }


  @HostListener('click') onClicks() {
    this.lineDecorator('line-through');
  }

  @HostListener('dblclick') onDoubleClick() {
    this.lineDecorator('none');
  }

}
