import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from '../components/ImageList';
import { fetchPhotos } from '../store/actions';
import { IAppState } from '../store/reducer';
import LoadingList from '../components/LoadingList';
import useWindowSize from '../hooks/useWindowSize';

const ImageListView = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state: IAppState) => state.photos);
    const windowSize = useWindowSize();

    const tileSize = 150;
    const columnCount = Math.floor(windowSize.width / tileSize) || 1
    const spacing = columnCount > 1 ? Math.floor((windowSize.width % tileSize) / (columnCount - 1)) : 0 
    const rowCount = Math.floor(windowSize.height / tileSize) || 1
    const fetchSize = Math.max(20, columnCount * rowCount * 2);

    useEffect(() => {
        if (photos.length === 0) {
            dispatch(fetchPhotos(fetchSize));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return photos.length === 0 ? <LoadingList columnCount={columnCount} spacing={spacing} tilesCount={fetchSize} tileSize={tileSize} /> : (
        <>
            <ImageList photos={photos} columnCount={columnCount} spacing={spacing} tileSize={tileSize} />
            <Button onClick={() => dispatch(fetchPhotos(fetchSize))}>Lataa lisää</Button>
        </>
    )
}

export default ImageListView;