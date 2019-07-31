import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class DragdropDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}