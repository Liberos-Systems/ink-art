import React, { useEffect, useState } from 'react';
import './Window.css';
import { getCurrent } from '@tauri-apps/api/window';

function Window({ children, position }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const centerWindow = async () => {
            const currentWindow = await getCurrent();
            if (position === 'center') {
                await currentWindow.center();
            }
        };
        centerWindow();
    }, [position]);

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
