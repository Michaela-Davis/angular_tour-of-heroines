import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroinesComponent } from './heroines.component';

describe('HeroinesComponent', () => {
  let component: HeroinesComponent;
  let fixture: ComponentFixture<HeroinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
