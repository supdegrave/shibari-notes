import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

import { Tie } from '../models/tie';

@Injectable({
    providedIn: 'root'
})
export class TiesService {

    private _tiesList: Tie[];
    private _filterList: App.TiesFilter[] = [];

    constructor(private http: HttpClient) { }

    initialize() {
        if (!this._tiesList) {
            this.http.get(`${environment.apiServer}/api/ties`)
                // log ties fetched from server
                // .pipe(tap(console.log))
                .subscribe(
                    (response: ShibariNotes.Tie[]) => this._tiesList = response.map((tie: ShibariNotes.Tie) => new Tie(tie)),
                    (error: HttpErrorResponse): void => console.warn(`get: /api/ties\nerror:`, error)
                );
        }
    }

    addFilter(propertyName: string, value: string): void {
        this._filterList.push({propertyName, value});
    }

    removeFilter(filter: App.TiesFilter): void {
        const filterIndex = this._filterList.indexOf(filter);
        if (filterIndex !== -1) {
            this._filterList.splice(filterIndex, 1);
        }
    }

    // apply all active filters to current set of ties
    get filteredTies(): Tie[] {
        let filteredTies = this._tiesList;

        this._filterList.forEach(
            (filter: App.TiesFilter) => filteredTies = filteredTies.filter((tie: Tie) => tie[filter.propertyName] === filter.value)
        );

        return filteredTies;
    }

    // return list of filter name/value pairs
    get activeFilters(): App.TiesFilter[] {
        return this._filterList;
    }

    // find a single tie by ID
    getTieById(id: string): Tie {
        return this._tiesList.find(tie => tie.id === id);
    }

    // get myTies() - ties entered by authenticated user (maybe this should be in a UserService instead?)
    // CRUD operator methods
}
