import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    public header: any;
    public path: string;
    constructor(
        public readonly http: HttpClient,
    ) {
        this.path = 'https://private-8e8921-woloxfrontendinverview.apiary-mock.com'
    }

    public initializeHeader() {
        return this.header = new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    get(url: string): any {
        return this.http.get(this.path + url, { headers: this.initializeHeader() });
    }

    post(url: string, data: any) {
        const params = data;
        return this.http.post(this.path + url, params, { headers: this.initializeHeader() });
    }
}