import { Map } from 'immutable';
import { DocumentActions, DocumentActionTypes} from './actions';

export interface IDocumentState {
     document: object[];
}

const initialState : IDocumentState = {
    document: [],
};

export  default (state = initialState, action: DocumentActions )  => {
  switch (action.type) {
    case DocumentActionTypes.FETCH_DOCUMENT_SUCCESS: {
      return {
        ...state,
        document: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
