import { Routes } from '@angular/router';
import { ChitietComponent } from './chitiet/chitiet.component';
import { DanhsachgiaodichComponent } from './danhsachgiaodich/danhsachgiaodich.component';

const routerConfig: Routes = [
    {
        path: '',
        component: DanhsachgiaodichComponent,
        title: 'Danh sách'
    },
    {
        path: 'chitiet\id',
        component: ChitietComponent,
        title: 'Chi tiết giao dịch'
    }

];

export default routerConfig;
