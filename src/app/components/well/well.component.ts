import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

  @Input() sourcekey;
  @Output() welldata = new EventEmitter();
  @ViewChild('wsourcekey', { 'static': false }) sk: ElementRef;

  name = '';
  type = '';
  listemp;
  constructor() { }

  ngOnInit() {
  }


  onSubmit(formdata) {
    this.welldata.emit({ "name": formdata.name, "type": formdata.type, "source": this.sk.nativeElement.value });
    this.name = '';
    this.type = '';
  }
}