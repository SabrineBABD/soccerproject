import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPlayerComponent } from './filter-player.component';

describe('FilterPlayerComponent', () => {
  let component: FilterPlayerComponent;
  let fixture: ComponentFixture<FilterPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
