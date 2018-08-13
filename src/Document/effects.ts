import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import * as documentActions from './actions';
import { DocumentService } from './service';

@Injectable()
export class DocumentEffects {
    
    constructor(private actions$:Actions, private documentService: DocumentService){

    }

    // tslint:disable-next-line:member-ordering
    @Effect()
    public getEffects$ = this.actions$.pipe(
        ofType(documentActions.DocumentActionTypes.FETCH_DOCUMENT),
        mergeMap((action: documentActions.FetchDocument) => this.documentService.fetchFromServer(action.payload).pipe(
            map( (resp: {data: { documents: object }}) => resp.data.documents),
            map((documents: object[]) => (new documentActions.FetchDocumentSuccess(documents))),
        )),
    );
}