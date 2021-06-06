import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const ListRoutesRoutes: Routes = [
    { path: '', component: RegisterComponent },
];
@NgModule({
    imports: [RouterModule.forChild(ListRoutesRoutes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
