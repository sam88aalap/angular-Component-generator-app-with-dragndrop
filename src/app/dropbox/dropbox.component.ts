import { Component,Input, OnInit, Output } from '@angular/core';
import { Field, FieldType } from 'src/app/app.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.scss']
})
export class DropboxComponent implements OnInit {

  @Input('FieldValue') field: Field = new Field();
  @Output() onSelect: EventEmitter<Field> = new EventEmitter();
  @Output() onAdd: EventEmitter<Field> = new EventEmitter();
  fieldType: typeof FieldType = FieldType;

  constructor() {
    console.log("Constructor Called")
  }
  OpenOptions(event: any) {
    this.onSelect.emit(this.field);
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      this.onAdd.emit(this.field);
    })

  }

}
