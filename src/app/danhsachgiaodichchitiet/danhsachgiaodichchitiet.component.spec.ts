import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachgiaodichchitietComponent } from './danhsachgiaodichchitiet.component';

describe('DanhsachgiaodichchitietComponent', () => {
  let component: DanhsachgiaodichchitietComponent;
  let fixture: ComponentFixture<DanhsachgiaodichchitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanhsachgiaodichchitietComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhsachgiaodichchitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
