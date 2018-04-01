import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpdsComponent } from './epds.component';

describe('EpdsComponent', () => {
  let component: EpdsComponent;
  let fixture: ComponentFixture<EpdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
