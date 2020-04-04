import { Button } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ImageCard from '../components/ImageCard';
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
        // We came from another page inside app
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
        <ImageCard
            photo={photo}
            actions={[(
                <Button
                    key="router"
                    onClick={handleRouting}
                    size="small"
                    color="primary"
                >
                    Listaukseen
                </Button>
            )]}
        />
    ) : <Skeleton variant="rect" animation="wave" width="100%" height={600} />
}

export default ImageView;