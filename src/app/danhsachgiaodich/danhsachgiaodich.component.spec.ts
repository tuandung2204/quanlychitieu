import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachgiaodichComponent } from './danhsachgiaodich.component';

describe('DanhsachgiaodichComponent', () => {
  let component: DanhsachgiaodichComponent;
  let fixture: ComponentFixture<DanhsachgiaodichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanhsachgiaodichComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhsachgiaodichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
