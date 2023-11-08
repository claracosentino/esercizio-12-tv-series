import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {ShowSearch} from '../_models/show.model';

@Injectable({
 providedIn: 'root',
})
export class ApiService {
    constructor( private http: HttpClient) {}
    searchShow(query: string) {
        return this.http
            .get('https://api.tvmaze.com/search/shows?q=' + query)
            .pipe( map( (response: any) => {
                return response.drinks as ShowSearch[];
            }))
    }
}