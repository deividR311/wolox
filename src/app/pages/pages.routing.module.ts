import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const PagesRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'list',
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
        loadChildren: () => import('./list/list.module').then((m) => m.ListModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)
    }
];
@NgModule({
    imports: [RouterModule.forChild(PagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
