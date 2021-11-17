import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldeditorComponent } from './fieldeditor.component';

describe('FieldeditorComponent', () => {
  let component: FieldeditorComponent;
  let fixture: ComponentFixture<FieldeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
