import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const mainURL = 'http://localhost:9494/graphql';
@Injectable({
    providedIn: 'root',
})
export class DocumentService {
    
    constructor(private http: HttpClient) {
        
    }

    public fetchFromServer(query:string): Observable<object[]> {
        return this.http.get<object[]>(`${mainURL}?query=${query.replace(/[\n\r]/g, '')}`);
    }
}