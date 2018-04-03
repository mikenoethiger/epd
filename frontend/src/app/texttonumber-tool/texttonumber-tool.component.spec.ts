import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttonumberToolComponent } from './texttonumber-tool.component';

describe('TexttonumberToolComponent', () => {
  let component: TexttonumberToolComponent;
  let fixture: ComponentFixture<TexttonumberToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexttonumberToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexttonumberToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
