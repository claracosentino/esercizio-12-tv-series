import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {ShowSearch, Shows} from '../_models/show.model';
import { Seasons } from '../_models/seasons.model';
import { Episodes } from '../_models/episodes.model';

@Injectable({
 providedIn: 'root',
})
export class ApiService {
    constructor( private http: HttpClient) {}

    searchShow(query: string) {
        return this.http
            .get('https://api.tvmaze.com/search/shows?q=' + query)
            .pipe( map( (response: any) => {
                const shows: ShowSearch[] = [];
                response.forEach((element:any) => {
                    element.show.score = element.score
                    shows.push(element.show)
                });
                return shows as ShowSearch[];
            }))
    }

    shows(id: number) {
        return this.http
            .get('https://api.tvmaze.com/shows/' + id)
            .pipe(map((response:any)=>{
                return response as Shows
            }))
    }

    seasons(id:number) {
        return this.http
            .get('https://api.tvmaze.com/shows/' + id + '/seasons')
            .pipe(map((response:any)=>{
                return response as Seasons[]
            }))
    }

    episodes(id:number) {
        return this.http
            .get('https://api.tvmaze.com/shows/' + id + '/episodes')
            .pipe(map((response:any)=>{
                return response as Episodes[]
            }))
    }
}