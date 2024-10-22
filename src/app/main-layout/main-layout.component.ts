import { Component } from '@angular/core';
import { DanhsachgiaodichComponent } from "../danhsachgiaodich/danhsachgiaodich.component";
import { ThongkeComponent } from "../thongke/thongke.component";
import { DangnhapComponent } from "../dangnhap/dangnhap.component";
import { DanhsachgiaodichchitietComponent } from "../danhsachgiaodichchitiet/danhsachgiaodichchitiet.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, DanhsachgiaodichComponent, ThongkeComponent, DangnhapComponent, DanhsachgiaodichchitietComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
