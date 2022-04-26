import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdhSelectComponent } from './edh-select.component';

describe('EdhSelectComponent', () => {
  let component: EdhSelectComponent;
  let fixture: ComponentFixture<EdhSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdhSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdhSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
