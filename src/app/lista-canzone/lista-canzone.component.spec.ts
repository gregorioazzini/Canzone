import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCanzoneComponent } from './lista-canzone.component';

describe('ListaCanzoneComponent', () => {
  let component: ListaCanzoneComponent;
  let fixture: ComponentFixture<ListaCanzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCanzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCanzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
