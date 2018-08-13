import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface IState {
    document: fromProducts.IDocumentState;
}

// Selector functions
const getDocumentState = createFeatureSelector<fromProducts.IDocumentState>('document');

export const getDocuments = createSelector(
    getDocumentState,
    state => state.document,
);