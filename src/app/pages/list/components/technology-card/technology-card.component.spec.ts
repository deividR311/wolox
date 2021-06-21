import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCardComponent } from './technology-card.component';

describe('TechnologyCardComponent', () => {
  let component: TechnologyCardComponent;
  let fixture: ComponentFixture<TechnologyCardComponent>;
  const technology = {}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyCardComponent);
    component = fixture.componentInstance;
    component.technology = technology;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
