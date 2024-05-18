import React, { useEffect, useState } from 'react';
import './headerBar.css';
import { getCurrent } from '@tauri-apps/api/window';

function HeaderBar({ title = "App Title" }) {
    const [isMaximized, setIsMaximized] = useState(false);

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

    return (
        <div className="headerBar">
            <div className="title">{title}</div>
            <div className="windowControls">
                <button onClick={minimizeApp}>Minimize</button>
                <button onClick={toggleMaximizeApp}>{isMaximized ? 'Restore' : 'Maximize'}</button>
                <button onClick={closeApp}>Close</button>
            </div>
        </div>
    );
}

export default HeaderBar;
