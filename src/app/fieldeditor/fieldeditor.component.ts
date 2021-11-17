// import { animate, style, transition, trigger } from '@angular/animations';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { DropdownItem, Field, FieldType, Radiocheckbox } from 'src/app/app.component';

// @Component({
//   selector: 'fe',
//   templateUrl: './fieldeditor.component.html',
//   styleUrls: ['./fieldeditor.component.scss']
// })
// export class FieldeditorComponent implements OnInit {

//   @Input('Field') field: Field | undefined;
//   fieldType: typeof FieldType = FieldType;
//   @Output() closeBox: EventEmitter<any> = new EventEmitter();
//   @Output() removeField: EventEmitter<Field> = new EventEmitter();

//   constructor() { }

//   //#region  Common Editor Functions
//   deleteField() {

//   this.removeField.emit(this.field);}

//   closeEditor() {
//     this.field = undefined;
//     this.closeBox.emit(null);
//   }
//   //#endregion

//   //#region Radio Box Implementation
//   addRadiocheckbox(index: number) {
//     this.field!.state!.radiogroup.options.splice(index + 1, 0,
//       {
//         Label: "Option " + (this.field!.state!.radiogroup.options.length + 1).toString(),
//         IsChecked: false
//       })
//   }
//   removeRadiocheckbox(item: Radiocheckbox) {
//     if (this.field!.state!.radiogroup.options.length > 2)
//       this.field!.state!.radiogroup.options = this.field?.state?.radiogroup.options.filter(t => t != item) ?? [];
//     else {
//       alert('Minimum 2 options required');
//     }
//   }
//   dropToBox(event: CdkDragDrop<any[]>) {
//     if (event.previousContainer === event.container) {
//       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
//     } else {

//     }
//   }
//   //#endregion

//   //#region Dropbox Implementation
//   addDropboxItem(index: number) {
//     this.field!.state!.dropdown.options.splice(index + 1, 0,
//       {
//         Label: "Option " + (this.field!.state!.dropdown.options.length + 1).toString(),
//       })
//   }
//   removeDropboxItem(item: DropdownItem) {
//     if (this.field!.state!.dropdown.options.length > 1)
//       this.field!.state!.dropdown.options = this.field?.state?.dropdown.options.filter(t => t != item) ?? [];
//     else {
//       alert('Minimum 2options required');
//     }
//   }


//   //#endregion

//   ngOnInit(): void {
//   }

// }


