import { IPhotoDefinition } from './models';
import { PHOTOS_LOADED, IAction, PHOTOS_LOAD_MORE, SINGLE_LOADED } from './actions';

export interface IAppState {
    photos: Array<IPhotoDefinition>,
    fetchSize: number,
    loading: boolean,
    directPhoto?: IPhotoDefinition, // Place to store a photo that was downloaded to support direct linking
}

const initialState: IAppState = { photos: [], fetchSize: 50, loading: false };

export default function reducer(state: IAppState = initialState, action: IAction) {
  switch (action.type) {
    case PHOTOS_LOADED:
      return { ...state, photos: state.photos.concat(action.photos), loading: false };
    case PHOTOS_LOAD_MORE:
      return { ...state, loading: true };
    case SINGLE_LOADED:
      return { ...state, directPhoto: action.photo };
    default:
      return state;
  }
}
