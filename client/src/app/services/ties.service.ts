import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as localforage from 'localforage';

import { Tie } from '../models/tie';

@Injectable({
    providedIn: 'root'
})
export class TiesService {

    private _tiesList: Tie[];
    private _filterList: App.TiesFilter[] = [];

    private mapTiesJsonToClass(tiesJson: ShibariNotes.Tie[]): Tie[] {
        if (tiesJson) {
            return tiesJson.map((tie: ShibariNotes.Tie) => new Tie(tie));
        }
    }

    constructor(private http: HttpClient) {
        localforage.getItem('tiesList')
            .then((tiesJson: ShibariNotes.Tie[]) => {
                this._tiesList = this.mapTiesJsonToClass(tiesJson);
                console.log('read', this._tiesList);
            });
    }

    initialize() {
        const next = (response: ShibariNotes.Tie[]) => {
            const tiesJson = response;
            this._tiesList = this.mapTiesJsonToClass(tiesJson);
            localforage.setItem('tiesList', tiesJson);
            console.log('write', this._tiesList);
        };

        const error = (err: HttpErrorResponse): void => {
            console.warn(`get: /api/ties\n => error:`, err);
        };

        const complete = () => { /* no-op */ };

        localforage.getItem('tiesList')
            .then((tiesJson: ShibariNotes.Tie[]) => {
                if (!tiesJson) {
                    this.http.get(`${environment.apiServer}/api/ties`)
                        .subscribe({ next, error, complete });
                }
            });
    }

    addFilter(propertyName: string, value: string): void {
        this._filterList.push({ propertyName, value });
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
