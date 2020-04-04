import React from 'react';
import { IPhotoDefinition } from '../store/models';
import Image from './Image';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

export type ImageListProps = {
    photos: Array<IPhotoDefinition>
}

const tileHeight = 150;

const ImageList: React.FC<ImageListProps> = ({ photos }) => {
    return (
        <GridList cellHeight={tileHeight} cols={5}>
            {photos.map((p) => (
                <GridListTile key={p.id}>
                    <Link to={`/photos/${p.id}`}>
                        <Image title={p.title} src={p.thumbnailUrl} />
                    </Link>
                    <GridListTileBar title={p.title} />
                </GridListTile>
            ))}
        </GridList>
    )
}

export default ImageList;