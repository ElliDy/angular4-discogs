import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCollectionsComponent } from './dc-collections.component';

describe('DcCollectionsComponent', () => {
  let component: DcCollectionsComponent;
  let fixture: ComponentFixture<DcCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
