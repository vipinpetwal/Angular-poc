import { Injectable } from '@angular/core';
import { Draglist } from '../components/dragdrop/dragdrop';

@Injectable()
export class DragdropService {

  constructor() { }


  getsamplerecord() {
    var data: Draglist[] = [{ id: 1, name: "Button" }, { id: 2, name: "Textbox" }, { id: 3, name: "Header" }, { id: 4, name: "Footer" }];
    return data;
  }

}