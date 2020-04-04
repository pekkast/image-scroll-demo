import { GridList, GridListTile } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

export type LoadingListProps = {
    tilesCount: number,
}

const tileHeight = 150;

const LoadingList: React.FC<LoadingListProps> = ({ tilesCount }) => {
    return (
        <GridList cellHeight={tileHeight} cols={5}>
            {Array(tilesCount).fill(0).map((p, idx) => (
                <GridListTile key={idx}>
                    <Skeleton variant="rect" animation="wave" width={tileHeight} height={tileHeight} />
                </GridListTile>
            ))}
        </GridList>
    )
}

export default LoadingList;