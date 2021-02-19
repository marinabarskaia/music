import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenItemComponent } from './listen-item.component';

describe('ListenItemComponent', () => {
  let component: ListenItemComponent;
  let fixture: ComponentFixture<ListenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
