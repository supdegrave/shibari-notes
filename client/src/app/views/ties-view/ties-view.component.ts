import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-ties-view',
    templateUrl: './ties-view.component.html',
    styleUrls: ['./ties-view.component.css']
})
export class TiesViewComponent implements OnInit {

    tiesList;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get(`${environment.apiServer}/api/ties`)
        .subscribe(
            (response) => this.tiesList = response,
            // (response) => console.log('get: /api/ties\nresponse:', response),
            (error) => console.warn(`get: /api/ties\nerror:`, error)
        );
    }

}
