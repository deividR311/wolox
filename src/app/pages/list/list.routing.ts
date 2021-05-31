import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';

const ListRoutesRoutes: Routes = [
    { path: '', component: ListComponent },
];
@NgModule({
    imports: [RouterModule.forChild(ListRoutesRoutes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }
