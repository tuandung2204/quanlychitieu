import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DanhsachgiaodichComponent } from './danhsachgiaodich/danhsachgiaodich.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { DangnhapComponent } from "./dangnhap/dangnhap.component";
import { DanhsachgiaodichchitietComponent } from "./danhsachgiaodichchitiet/danhsachgiaodichchitiet.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DanhsachgiaodichComponent, ThongkeComponent, DangnhapComponent, RouterModule, DanhsachgiaodichchitietComponent],
  templateUrl: './app.component.html' ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quanlychitieu1';
}
