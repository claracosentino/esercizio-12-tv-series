import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
 providedIn: 'root',
})
export class EpisodesService {
    constructor(private apiService: ApiService) {}

    episodes(id: number) {
        return this.apiService.episodes(id)
    }

}