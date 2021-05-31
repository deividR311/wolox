import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { PagesRoutingModule } from './pages.routing.module';


const MODULES = [
    HomeModule,
    ListModule,
    PagesRoutingModule
];

@NgModule({
    exports: [...MODULES],
    imports: [MODULES],
    providers: [],
})
export class PagesModule { }
