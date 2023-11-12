import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
 providedIn: 'root',
})
export class SeasonsService {
    constructor(private apiService: ApiService) {}

    seasons(id: number) {
        return this.apiService.seasons(id)
    }

}