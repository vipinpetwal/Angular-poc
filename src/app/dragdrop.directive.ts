import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dragdrop-host]',
})
export class DragdropDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}