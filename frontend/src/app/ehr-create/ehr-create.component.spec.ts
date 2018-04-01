import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhrCreateComponent } from './ehr-create.component';

describe('EhrCreateComponent', () => {
  let component: EhrCreateComponent;
  let fixture: ComponentFixture<EhrCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhrCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhrCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
