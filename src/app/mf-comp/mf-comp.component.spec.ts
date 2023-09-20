import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfCompComponent } from './mf-comp.component';

describe('MfCompComponent', () => {
  let component: MfCompComponent;
  let fixture: ComponentFixture<MfCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfCompComponent]
    });
    fixture = TestBed.createComponent(MfCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
