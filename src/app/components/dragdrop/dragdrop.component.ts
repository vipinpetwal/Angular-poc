import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DragdropService } from 'src/app/services/dragdrop.service';
import { Draglist } from './dragdrop';
import { DragdropDirective } from 'src/app/dragdrop.directive';
import { ButtonComponent } from '../button/button.component';
import { TextboxComponent } from '../textbox/textbox.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  showcomponent;
  activeList: Draglist[];
  isdragged: boolean = false;
  @ViewChild(DragdropDirective, { static: true }) dragdropHost: DragdropDirective;
  
  constructor(private dragdropservice: DragdropService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.activeList = this.dragdropservice.getComponent();
  }

  drop(ev, test) {
    ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));     
    this.isdragged = true;
    this.loadComponent();

  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev, list) {
    this.isdragged = false;
    ev.dataTransfer.setData("text", ev.target.id);
    this.showcomponent = list ? list.id : '';
  }

  loadComponent() {
    let componentFactory;
    let viewContainerRef;
    switch (this.showcomponent) {
      case 1:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(ButtonComponent);
        break;
      case 2:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(TextboxComponent);
        break;
      case 3:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(HeaderComponent);
        break;
      case 4:
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(FooterComponent);
        break;
    }


    viewContainerRef = this.dragdropHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);


  }

}
