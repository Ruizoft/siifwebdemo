import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SwController } from '../../ServiceWorker/swController';
import * as documentActions from '../actions';
import queries from '../queries';
import { IDocumentState } from '../reducer';
import { getDocuments } from '../selectors';
import documentTemplate from './document.html';
import './document.scss';

@Component({
    selector: 'doc-comp',
    template: documentTemplate,
})

export class DocumentComponent implements OnInit {
    public documents$: object[];
    public documents2$: Observable<object[]>;

    // tslint:disable-next-line:no-empty
    constructor(private store: Store<IDocumentState>, private swController: SwController) {}
    
    public ngOnInit(): void {
        console.info(this.swController.isEnabled);
        this.store.dispatch(new documentActions.FetchDocument(queries.getDocuments));
        this.store.pipe(select(getDocuments)).subscribe(documents  => this.documents$ = documents);
        this.documents2$ = this.store.pipe(select(getDocuments));
    }

    public simpleSum(a:number, b:number): number {
        return a + b;
    }
}
