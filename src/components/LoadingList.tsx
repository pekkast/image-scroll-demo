import { GridList, GridListTile } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

export type LoadingListProps = {
    tilesCount: number,
    columnCount: number,
    spacing: number,
    tileSize: number,
}

const LoadingList: React.FC<LoadingListProps> = ({ tilesCount, columnCount, spacing, tileSize }) => {
    return (
        <GridList cellHeight={tileSize} cols={columnCount} spacing={spacing}>
            {Array(tilesCount).fill(0).map((p, idx) => (
                <GridListTile key={idx}>
                    <Skeleton variant="rect" animation="wave" width={tileSize} height={tileSize} />
                </GridListTile>
            ))}
        </GridList>
    )
}

export default LoadingList;