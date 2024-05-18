import React, { useEffect, useState } from 'react';
import './Window.css';

function Window({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className={`window ${isVisible ? 'visible' : ''}`}>
            {children}
        </main>
    );
}

export default Window;

;
