import { Component, input, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-danhsachgiaodich',
  standalone: true,
  imports: [AppComponent, CommonModule, RouterModule],
  templateUrl: './danhsachgiaodich.component.html',
  styleUrl: './danhsachgiaodich.component.css'
})
export class DanhsachgiaodichComponent {

}
