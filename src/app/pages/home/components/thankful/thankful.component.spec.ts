import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankfulComponent } from './thankful.component';

describe('ThankfulComponent', () => {
  let component: ThankfulComponent;
  let fixture: ComponentFixture<ThankfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
