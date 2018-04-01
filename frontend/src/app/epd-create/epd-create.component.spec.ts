import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpdCreateComponent } from './epd-create.component';

describe('EpdCreateComponent', () => {
  let component: EpdCreateComponent;
  let fixture: ComponentFixture<EpdCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpdCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
