import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMatchComponent } from './next-match.component';

describe('NextMatchComponent', () => {
  let component: NextMatchComponent;
  let fixture: ComponentFixture<NextMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
