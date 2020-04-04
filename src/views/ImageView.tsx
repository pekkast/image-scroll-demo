import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Image from '../components/Image';
import { fetchPhoto } from '../store/actions';
import { IPhotoDefinition } from '../store/models';
import { IAppState } from '../store/reducer';

const getMatchedOrNull = (id: number, photo?: IPhotoDefinition) => photo && photo.id === id ? photo : null;

const ImageView = () => {
    const { photoId } = useParams();
    const id: number = photoId ? parseInt(photoId, 10) : 0;
    const dispatch = useDispatch();
    const photo = useSelector((state: IAppState) => id ? state.photos.find(p => p.id === id) || getMatchedOrNull(id, state.directPhoto) : null)
    const history = useHistory();

    const handleRouting = () => {
        if (history.length > 0) {
            history.goBack();
        } else {
            history.push('/');
        }
    }

    useEffect(() => {
        if (!photo) {
            dispatch(fetchPhoto(id))
        }
    }, [photoId, photo, dispatch, id])

    return photo ? (
        <Card>
            <CardActionArea>
                <Image className="MuiCardMedia-img MuiCardMedia-media" title={photo.title} height={600} width="100%" src={photo.url} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {photo.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={handleRouting} size="small" color="primary">
                    Listaukseen
                </Button>
            </CardActions>
        </Card>
    ) : <Skeleton variant="rect" animation="wave" width="100%" height={600} />
}

export default ImageView;