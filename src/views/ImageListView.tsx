import { LinearProgress, withStyles } from '@material-ui/core';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from '../components/ImageList';
import useWindowSize from '../hooks/useWindowSize';
import { fetchPhotos } from '../store/actions';
import { IAppState } from '../store/reducer';

const StyledProgress = withStyles({
    root: {
        height: 20,
        margin: 5,
    },
})(LinearProgress)

const ImageListView = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state: IAppState) => state.photos);
    const windowSize = useWindowSize();

    const tileSize = 150;
    const columnCount = Math.floor(windowSize.width / tileSize) || 1
    const spacing = columnCount > 1 ? Math.floor((windowSize.width % tileSize) / (columnCount - 1)) : 0
    const rowCount = Math.floor(windowSize.height / tileSize) || 1
    const fetchSize = Math.max(20, columnCount * rowCount * 2);
    const loadMore = () => dispatch(fetchPhotos(fetchSize));

    return (
        <InfiniteScroll
            pageStart={1}
            loadMore={loadMore}
            hasMore={photos.length < 5000}
            loader={<StyledProgress key="loading" />}
        >
            <ImageList
                key="images"
                photos={photos}
                columnCount={columnCount}
                spacing={spacing}
                tileSize={tileSize}
            />
        </InfiniteScroll>
    )
}

export default ImageListView;