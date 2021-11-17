import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { UUID } from 'angular2-uuid';


export class Field {
  public type: FieldType = 0;
  public title: string = "No Title";
  public label: string = "No Label";
  public validation?: ValidationType = 0;
  public regex?: string = ''
  public id?: string = ''
  public state?: FieldState = new FieldState();
}

export class FieldState {
  public IsSelected: boolean = true;
  public FontSize: number = 14;
  public DefaultValue: any = '';
  public checkbox: CheckboxField = new CheckboxField();
  public radiogroup: RadiogroupField = new RadiogroupField();
  public dropdown:DropdownList = new DropdownList();
}
export class CheckboxField {
  public IsChecked: boolean = false;
  constructor() {
  }
}
export class RadiogroupField {
  public Title: string = '';
  public options: Array<Radiocheckbox> = new Array<Radiocheckbox>();
  constructor() {
  }
}
export class Radiocheckbox {
  public IsChecked: boolean = false;
  public Label: string = 'Option';
}
export class DropdownList {
  public Placeholder: string = 'Choose an Option';
  public options: Array<DropdownItem> = new Array<DropdownItem>();
  constructor() {

  }
}
export class DropdownItem {
  public Label: string = 'Choose an Option'
}
export enum FieldType {
  Other,
  Input,
  TextArea,
  Checkbox,
  Radiogroup,
  Dropdown
}
export enum ValidationType {
  None,
  Custom,
  FirstName,
  LastName,
  Email,
  Phone,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  temp:any;
  title = 'dragdrop2';
  Labels: Array<Field> = [
    { label: "Input", title: "Input", type: FieldType.Input },
    { label: "Message Box", title: "Input", type: FieldType.TextArea },
    { label: "Check Box", title: "Input", type: FieldType.Checkbox },
    { label: "Radio Group", title: "Input", type: FieldType.Radiogroup },
    { label: "Dropdown", title: "Input", type: FieldType.Dropdown },
  ];
  dropedLabels: Array<Field> = [];
  selectedField: Field | undefined;

  dropToBox(event: CdkDragDrop<Field[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.previousContainer.id != 'second-list') {
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  }
  dragEnded(event: any) {
    this.temp = event.source.data;
  }

  dropToFields(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      return;
    }
    console.log(event)
    let newfield_json = JSON.stringify(this.temp);
    let newfield = JSON.parse(newfield_json) as Field;
    newfield.id = UUID.UUID();
    newfield.state = new FieldState();
    newfield.state.IsSelected = true;
    if (newfield.type == FieldType.Radiogroup) {
      newfield.state!.radiogroup = new RadiogroupField();
      newfield.state!.radiogroup.Title = 'Radio Group';
      newfield.state!.radiogroup.options.push(
        { IsChecked: true, Label: 'Option 1' },
        { IsChecked: false, Label: 'Option 2' }
      )
    }
    else if (newfield.type == FieldType.Dropdown) {
      newfield.state!.dropdown = new DropdownList();
      newfield.state!.dropdown.Placeholder = 'Choose an Option';
      newfield.state!.dropdown.options.push(
        { Label: 'Option 1' },
        { Label: 'Option 2' }
      )
    }

    this.dropedLabels.splice(event.currentIndex, 0, newfield);
    this.dropedLabels.forEach(item => {
      if (item.id != newfield.id) {
        item.state!.IsSelected = false;
      }
      else {
        this.selectedField = item;
      }
    })

  }

  fieldSelected(event: Field) {
    this.dropedLabels.forEach(item => {
      if (event.id != item.id) {
        item.state!.IsSelected = false;
      }
      else {
        item.state!.IsSelected = true;
        this.selectedField = item;
      }
    })
  }
  closeAttributeBox(event: any) {
    this.dropedLabels.forEach(item => {
      item.state!.IsSelected = false
    })
    this.selectedField = undefined;
  }
  DeleteField(event: Field) {
    this.dropedLabels = this.dropedLabels.filter(t => t.id != event.id)
    this.selectedField = undefined;
  }






}
