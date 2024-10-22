import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtindangnhapComponent } from './thongtindangnhap.component';

describe('ThongtindangnhapComponent', () => {
  let component: ThongtindangnhapComponent;
  let fixture: ComponentFixture<ThongtindangnhapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThongtindangnhapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThongtindangnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
