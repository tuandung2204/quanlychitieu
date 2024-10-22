import { Component, Input } from '@angular/core';
import { DanhsachgiaodichComponent } from '../danhsachgiaodich/danhsachgiaodich.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { Danhsachgiaodichchitiet } from '../danhsachgiaodich';

@Component({
  selector: 'app-danhsachgiaodichchitiet',
  standalone: true,
  imports: [DanhsachgiaodichComponent,CommonModule,AppComponent],
  templateUrl: './danhsachgiaodichchitiet.component.html',
  styleUrl: './danhsachgiaodichchitiet.component.css'
})
export class DanhsachgiaodichchitietComponent {
  @Input() giaodich : Danhsachgiaodichchitiet[] = [
    {
      id : 1 ,
      magiaodich : 1 ,
      tenkhoantien : 'Tiền Lương' ,
      sotien : 5000000 ,
      thoigian : 25/12/2023 ,
      loaigiaodich: 1 ,
      ghichu: ''
    },
    {
      id : 2 ,
      magiaodich : 2 ,
      tenkhoantien : 'Tiền ăn' ,
      sotien : 20000 ,
      thoigian : 25/12/2023 ,
      loaigiaodich: 2 ,
      ghichu: ''
    }
  ]

}
