import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdhListComponent } from './edh-list.component';

describe('EdhListComponent', () => {
  let component: EdhListComponent;
  let fixture: ComponentFixture<EdhListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdhListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdhListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
