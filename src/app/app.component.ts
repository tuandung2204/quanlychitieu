import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DanhsachgiaodichComponent } from './danhsachgiaodich/danhsachgiaodich.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { DangnhapComponent } from "./dangnhap/dangnhap.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DanhsachgiaodichComponent, ThongkeComponent, DangnhapComponent,RouterModule],
  template: `
    <main>
      <header class="brand-name">
    
      <img class="brand-logo" 
     style="width: 100px; height: 100px; object-fit: cover; margin-left: 120px"
     src="https://media.istockphoto.com/id/931069328/vector/icon-for-fundraising-business-loan-money-save-money-and-other-financial-management.jpg?s=612x612&w=0&k=20&c=0BQGJcwUAkP8enU8z5AnuIK4v0fe89YPWg6-Ts1a3fM=" 
     alt="logo" 
     aria-hidden="true"
     >
      <h1 style="font-family: Arial, Helvetica, sans-serif;margin-left : 10px">Expense management</h1>
    
      </header>
      <section class="content">
        <app-danhsachgiaodich style="padding: 150px;"></app-danhsachgiaodich>
        <app-thongke style="padding: 150px;"></app-thongke>
        <app-dangnhap style="padding: 150px;"></app-dangnhap>
    
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quanlychitieu1';
}
