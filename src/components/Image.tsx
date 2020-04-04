import React from 'react';
import { Skeleton } from '@material-ui/lab';

export type ImageProps = {
    title: string,
    src: string,
    width?: number | string,
    height?: number | string,
    className?: string,
};

const Image: React.FC<ImageProps> = ({title, src, width, height, className}) => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const setLoaded = () => setLoading(false)

    return (
        <>
            {loading && <Skeleton className={className} variant="rect" animation="wave" width={width} height={height} />}
            <img 
                className={className}
                style={{ display: loading ? 'none' : 'inline-block' }} 
                alt={title} 
                src={src} 
                width={width} 
                height={height} 
                onLoad={setLoaded} 
            />
        </>
    );
}

export default Image;