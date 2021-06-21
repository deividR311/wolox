import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { PagesRoutingModule } from './pages.routing.module';
import { RegisterModule } from './register/register.module';


const MODULES = [
    HomeModule,
    ListModule,
    RegisterModule,
    PagesRoutingModule
];

@NgModule({
    exports: [...MODULES],
    imports: [...MODULES, FormsModule, ReactiveFormsModule],
    providers: [],
})
export class PagesModule { }
