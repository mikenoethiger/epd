import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionToolComponent } from './encryption-tool.component';

describe('EncryptionToolComponent', () => {
  let component: EncryptionToolComponent;
  let fixture: ComponentFixture<EncryptionToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptionToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
