import React, { useEffect, useState } from 'react';
import './Page.css';

function Page({ children, onLoaded }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        if (onLoaded) {
            onLoaded();
        }
    }, [onLoaded]);

    return (
        <div className={`page ${isLoaded ? 'loaded' : ''}`}>
            {children}
        </div>
    );
}

export default Page;
