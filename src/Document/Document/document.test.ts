import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestStore } from '../../testingUtils';
import * as DocumentActions from '../actions';
import queries from '../queries';
import { IDocumentState } from '../reducer';
import { DocumentComponent } from './document.container';

describe('Document container test suite', () => {
        let component: DocumentComponent;
        let fixture: ComponentFixture<DocumentComponent>;
        let store: TestStore<any>;
        let document: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    DocumentComponent,
                ],
                providers: [
                    { provide: Store, useClass: TestStore },
                  ],
                schemas: [ NO_ERRORS_SCHEMA ],           
            });
            fixture = TestBed.createComponent(DocumentComponent);
            component = fixture.componentInstance;
            store = TestBed.get(Store);
            fixture.detectChanges();
            document = [{DOCU_GEN: 1, name:'doc1'}, {DOCU_GEN:2, name:'doc2'}];
            
        });

        it('should render the component', () => {
            expect(component).toBeTruthy();
        });
    
        it('should make the correct sum', () => {   
            expect(component.simpleSum(1, 2)).toBe(3);           
        });

        it('should dispatch an action to load data when created', () => {
            const action = new DocumentActions.FetchDocument(queries.getDocuments);
            expect(store.dispatch).toHaveBeenCalledWith(action);
          });

        it('should get the correct state', () => {
            store.setState(document);
            expect(component.documents$).toEqual(document);
        });

        it('should display the correct number of documents', () => { 
            store.setState(document);  
            fixture.detectChanges();
            const displayDocs = fixture.debugElement.queryAll(By.css('.docs'));
            expect(displayDocs.length).toBe(2);           
        });
});