import React from 'react';
import { IPhotoDefinition } from '../store/models';
import { Card, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';
import Image from './Image';

export type ImageCardProps = {
    photo: IPhotoDefinition,
    actions?: React.ReactNodeArray,
};

const ImageCard: React.FC<ImageCardProps> = ({ photo, actions }) => (
    <Card>
        <CardActionArea>
            <Image
                className="MuiCardMedia-img MuiCardMedia-media"
                title={photo.title}
                height={600}
                width="100%"
                src={photo.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {photo.title}
                </Typography>
            </CardContent>
        </CardActionArea>
        {actions && (
            <CardActions>
                {actions}
            </CardActions>
        )}
    </Card>
);

export default ImageCard;