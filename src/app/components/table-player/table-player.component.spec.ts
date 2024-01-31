import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlayerComponent } from './table-player.component';

describe('TablePlayerComponent', () => {
  let component: TablePlayerComponent;
  let fixture: ComponentFixture<TablePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
