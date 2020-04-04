import { IPhotoDefinition } from './models';
import { Dispatch } from 'redux';
import { IAppState } from './reducer';

export interface IAction {
    type: string,
    [key: string]: any,
}

export const PHOTOS_LOADED = 'app.images.PHOTOS_LOADED';
export const PHOTOS_LOAD_MORE = 'app.images.PHOTOS_LOAD_MORE';
export const SINGLE_LOADED = 'app.images.SINGLE_LOADED';

export const photosLoaded = (photos: Array<IPhotoDefinition>): IAction => ({
    type: PHOTOS_LOADED,
    photos,
})

export const photosLoadMore = (): IAction => ({
    type: PHOTOS_LOAD_MORE,
})

export const singleLoaded = (photo: IPhotoDefinition): IAction => ({
    type: SINGLE_LOADED,
    photo,
})

const serverUrl = 'http://jsonplaceholder.typicode.com';

export const fetchPhotos = (fetchSize: number) => async (dispatch: Dispatch, getState: () => IAppState) => {
    const { photos } = getState();
    dispatch(photosLoadMore());
    const response = await fetch(`${serverUrl}/photos?_start=${photos.length}&_limit=${fetchSize}`);
    dispatch(photosLoaded(await response.json()));
}

export const fetchPhoto = (id: number) => async (dispatch: Dispatch) => {
    dispatch(photosLoadMore());
    const response = await fetch(`${serverUrl}/photos/${id}`);
    dispatch(singleLoaded(await response.json()));
}
