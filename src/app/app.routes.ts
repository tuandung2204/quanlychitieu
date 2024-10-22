import { Routes } from '@angular/router';
import { DanhsachgiaodichComponent } from './danhsachgiaodich/danhsachgiaodich.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ThongtindangnhapComponent } from './thongtindangnhap/thongtindangnhap.component';
import { AppComponent } from './app.component';

const routerConfig: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Home '
    },
    {
        path: 'thongtindangnhap\id',
        component: ThongtindangnhapComponent,
        title: 'Thông tin đăng nhập'
    }

];

export default routerConfig;
