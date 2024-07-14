import React, { useEffect, useState } from 'react';
import styles from './Window.module.css';
import { getCurrent } from '@tauri-apps/api/window';

function Window({ children, position, onLoaded }) {
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

    useEffect(() => {
        if (isVisible && onLoaded) {
            const timer = setTimeout(() => {
                onLoaded();
            }, 300); // Czas trwania animacji w milisekundach
            return () => clearTimeout(timer);
        }
    }, [isVisible, onLoaded]);

    return (
        <main className={`${styles.window} ${isVisible ? styles.visible : ''}`}>
            {children}
        </main>
    );
}

export default Window;