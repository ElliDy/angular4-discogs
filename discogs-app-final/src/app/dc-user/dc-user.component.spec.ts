import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcUserComponent } from './dc-user.component';

describe('DcUserComponent', () => {
  let component: DcUserComponent;
  let fixture: ComponentFixture<DcUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
