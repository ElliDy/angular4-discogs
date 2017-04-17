import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCollectionItemComponent } from './dc-collection-item.component';

describe('DcCollectionItemComponent', () => {
  let component: DcCollectionItemComponent;
  let fixture: ComponentFixture<DcCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
