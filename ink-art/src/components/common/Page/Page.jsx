import React, { useEffect, useState } from 'react';
import styles from './Page.module.css';

function Page({ children, onLoaded }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        if (onLoaded) {
            onLoaded();
        }
    }, [onLoaded]);

    return (
        <div className={`${styles.page} ${isLoaded ? styles.loaded : ''}`}>
            {children}
        </div>
    );
}

export default Page;
