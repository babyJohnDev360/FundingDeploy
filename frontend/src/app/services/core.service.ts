import { Injectable, signal } from '@angular/core';
import { AppSettings, defaults } from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import urlJoin from 'url-join';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CoreService {
    private baseUrl = 'http://localhost:3001/api';
    private apiUrl = environment.apiUrl;
    // private baseUrl ='http://localhost:4000'

    constructor(private http: HttpClient) {}

    private optionsSignal = signal<AppSettings>(defaults);

    getOptions() {
        return this.optionsSignal();
    }

    setOptions(options: Partial<AppSettings>) {
        this.optionsSignal.update((current) => ({
            ...current,
            ...options,
        }));
    }

    private getHeaders() {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        if (token) {
            headers = headers.set('Authorization', `Bearer ${token}`);
        }

        return { headers };
    }

    get(API: string) {
        return this.http.get<Response>(urlJoin(this.apiUrl, API), this.getHeaders());
    }

    login(API: string, body: any) {
        return this.http.post<Response>(urlJoin(this.apiUrl, API), body);
    }

    post(API: string, body: any) {
        return this.http.post<Response>(urlJoin(this.apiUrl, API), body, this.getHeaders());
    }

    addUser(data: any) {
        return this.http.post(`${this.apiUrl}/user/register`, data);
    }

    updateUser(id: number, data: any) {
        return this.http.put(`${this.apiUrl}/user/${id}`, data);
    }

    getUserList() {
        return this.http.get(`${this.apiUrl}/user`);
    }

    deleteUser(id: number) {
        return this.http.delete(`${this.apiUrl}/user/${id}`);
    }

    addFund(data: any) {
        return this.http.post(`${this.apiUrl}/user/fund`, data);
    }

    getFundList() {
        return this.http.get(`${this.apiUrl}/user/fund`);
    }

    addService(data: any) {
        return this.http.post(`${this.apiUrl}/user/service`, data);
    }

    getServiceList() {
        return this.http.get(`${this.apiUrl}/user/service`);
    }
}
