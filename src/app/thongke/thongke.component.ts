import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thongke',
  standalone: true,
  imports: [AppComponent,CommonModule],
  templateUrl: './thongke.component.html',
  styleUrl: './thongke.component.css'
})
export class ThongkeComponent {

}
