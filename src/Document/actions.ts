import { Action } from '@ngrx/store';

export enum DocumentActionTypes {
  FETCH_DOCUMENT = '[Document] FETCH_DOCUMENT',
  FETCH_DOCUMENT_SUCCESS = '[Document] FETCH_DOCUMENT_SUCCESS',
}

export class FetchDocument implements Action {
  public readonly type = DocumentActionTypes.FETCH_DOCUMENT;

  constructor(public payload: string) { }
}

// tslint:disable-next-line:max-classes-per-file
export class FetchDocumentSuccess implements Action {
  public readonly type = DocumentActionTypes.FETCH_DOCUMENT_SUCCESS;

  constructor(public payload: object[]) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type DocumentActions
            = FetchDocument
            | FetchDocumentSuccess;
