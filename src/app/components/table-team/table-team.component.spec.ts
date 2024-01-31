import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTeamComponent } from './table-team.component';

describe('TableTeamComponent', () => {
  let component: TableTeamComponent;
  let fixture: ComponentFixture<TableTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
