import { Button, Dialog, DialogActions, DialogContent, DialogTitle, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { IPhotoDefinition } from '../store/models';
import Image from './Image';
import ImageCard from './ImageCard';

const useStyles = makeStyles({
    tile: {
        cursor: 'pointer',
    }
});

export type ImageListProps = {
    photos: Array<IPhotoDefinition>,
    columnCount: number,
    spacing: number,
    tileSize: number,
};

const ImageList: React.FC<ImageListProps> = ({ photos, columnCount, spacing, tileSize }) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [selectedPhoto, setSelectedPhoto] = React.useState<IPhotoDefinition|null>(null);
    const handleClose = () => setIsDialogOpen(false);
    const handleOpen = (photo: IPhotoDefinition) => {
        setSelectedPhoto(photo);
        setIsDialogOpen(true);
    };

    const classes = useStyles();

    return (
        <>
            <GridList cellHeight={tileSize} cols={columnCount} spacing={spacing}>
                {photos.map((p) => (
                    <GridListTile className={classes.tile} key={p.id} onClick={() => handleOpen(p)}>
                        <Image title={p.title} src={p.thumbnailUrl} />
                        <GridListTileBar title={p.title} />
                    </GridListTile>
                ))}
            </GridList>
            <Dialog open={isDialogOpen} onClose={handleClose} aria-labelledby="photo-details-title">
                <DialogTitle id="photo-details-title">{selectedPhoto?.title}</DialogTitle>
                <DialogContent>
                    <ImageCard photo={selectedPhoto!} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Sulje
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ImageList;