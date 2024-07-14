import React, { useEffect, useState } from 'react';
import styles from './headerBar.module.css';
import { getCurrent, LogicalPosition, PhysicalPosition } from '@tauri-apps/api/window';

function HeaderBar({ title = "App Title" }) {
    const [isMaximized, setIsMaximized] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    async function closeApp() {
        const currentWindow = await getCurrent();
        await currentWindow.close();
    }

    async function minimizeApp() {
        const currentWindow = await getCurrent();
        await currentWindow.minimize();
    }

    async function toggleMaximizeApp() {
        const currentWindow = await getCurrent();
        if (isMaximized) {
            await currentWindow.unmaximize();
        } else {
            await currentWindow.maximize();
        }
        setIsMaximized(!isMaximized);
    }

    async function startDrag(event) {
        if (event.button === 0) { // 0 oznacza lewy przycisk myszy
            const currentWindow = await getCurrent();
            const windowPosition = await currentWindow.outerPosition();
            setDragOffset({
                x: event.screenX - windowPosition.x,
                y: event.screenY - windowPosition.y
            });
            setIsDragging(true);
        }
    }

    function stopDrag() {
        setIsDragging(false);
    }

    async function handleMouseMove(event) {
        if (isDragging) {
            const currentWindow = await getCurrent();
            const newPosition = new PhysicalPosition(
                event.screenX - dragOffset.x,
                event.screenY - dragOffset.y
            );
            await currentWindow.setPosition(newPosition);
        }
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', stopDrag);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', stopDrag);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', stopDrag);
        };
    }, [isDragging]);

    return (
        <div className={styles.headerBar} onMouseDown={startDrag}>
            <div className={styles.title}>{title}</div>
            <div className={styles.windowControls}>
                <button onClick={minimizeApp}>Minimize</button>
                <button onClick={toggleMaximizeApp}>{isMaximized ? 'Restore' : 'Maximize'}</button>
                <button onClick={closeApp}>Close</button>
            </div>
        </div>
    );
}

export default HeaderBar;