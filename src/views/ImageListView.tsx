import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from '../components/ImageList';
import { fetchPhotos } from '../store/actions';
import { IAppState } from '../store/reducer';
import LoadingList from '../components/LoadingList';

const ImageListView = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state: IAppState) => state.photos);

    useEffect(() => {
        if (photos.length === 0) {
            dispatch(fetchPhotos());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return photos.length === 0 ? <LoadingList tilesCount={50} /> : (
        <>
            <ImageList photos={photos} />
            <Button onClick={() => dispatch(fetchPhotos())}>Lataa lisää</Button>
        </>
    )
}

export default ImageListView;