import { Routes } from '@angular/router';
import { DanhsachgiaodichComponent } from './danhsachgiaodich/danhsachgiaodich.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ThongtindangnhapComponent } from './thongtindangnhap/thongtindangnhap.component';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DanhsachgiaodichchitietComponent } from './danhsachgiaodichchitiet/danhsachgiaodichchitiet.component';

const routerConfig: Routes = [
    {
        path: '',
        component: MainLayoutComponent, // This will load the layout
        children: [
            {
                path: '',
                component: AppComponent,
                title: 'Home '
            },
            {
                path: 'thongtindangnhap/:id',
                component: ThongtindangnhapComponent,
                title: 'Thông tin đăng nhập'
            },
            {
                path: 'danhsachgiaodich',
                component: DanhsachgiaodichchitietComponent,
                title: 'Danh sach giao dich'
            }
        ]
    }
];

export default routerConfig;
