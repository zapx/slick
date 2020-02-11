import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapxSlickComponent } from './zapx-slick.component';

describe('ZapxSlickComponent', () => {
  let component: ZapxSlickComponent;
  let fixture: ComponentFixture<ZapxSlickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZapxSlickComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapxSlickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
