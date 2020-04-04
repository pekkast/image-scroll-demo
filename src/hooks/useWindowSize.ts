// Borrowed from https://usehooks.com/useWindowSize/
import { useState, useEffect } from 'react';

interface IWindow {
    innerWidth: number,
    innerHeight: number,
    addEventListener: (eventType: string, eventHandler: () => void) => void,
    removeEventListener: (eventType: string, eventHandler: () => void) => void,
}

interface IPlaneSize {
    width: number,
    height: number,
}

export const getSize = (window: IWindow): IPlaneSize => ({
    width: window.innerWidth,
    height: window.innerHeight,
});

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<IPlaneSize>(getSize(window));
    const handleResize = () => setWindowSize(getSize(window));

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return windowSize;
}