import React, { useEffect, useState } from 'react';
import './Page.css';

function Page({ children }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`page ${isLoaded ? 'loaded' : ''}`}>
            {children}
        </div>
    );
}

export default Page;
