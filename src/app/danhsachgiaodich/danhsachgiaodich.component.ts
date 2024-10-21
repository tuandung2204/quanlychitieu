import { Component } from '@angular/core';
import { DanhSachGiaoDich } from '../danhsachgiaodich';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-danhsachgiaodich',
  standalone: true,
  imports:[AppComponent,CommonModule],
  templateUrl: './danhsachgiaodich.component.html',
  styleUrl: './danhsachgiaodich.component.css'
})
export class DanhsachgiaodichComponent {
  danhsachgiaodich : DanhSachGiaoDich = {
    id : 1 ,
    magiaodich : 1 ,
    tenkhoantien : 'Tiền Lương' ,
    sotien : 5000000 ,
    thoigian : 25/12/2023 ,
    loaigiaodich: 1 ,
    ghichu: ''
};
}
