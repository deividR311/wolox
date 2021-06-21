import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class RegisterService extends BaseService{
    public header: any;
    public path: string;
    constructor( readonly http: HttpClient ) {
        super(http);
    }
    
    signUp( data: any ): any {
        return this.post('/signup', data);
    }
}