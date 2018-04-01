import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpdDetailComponent } from './epd-detail.component';

describe('EpdDetailComponent', () => {
  let component: EpdDetailComponent;
  let fixture: ComponentFixture<EpdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
