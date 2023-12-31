import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appSetColor]",
})
export class SetColorDirective {
  @Input() set appSetColor(value: any) {
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      value
    );
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
