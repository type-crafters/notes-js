import { app, BrowserWindow } from "electron";
import path from "path";
import started from "electron-squirrel-startup";

if (started) {
    app.quit();
}

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 560,
        webPreferences: {
            preload: path.join(import.meta.dirname, "..", "preload", "preload.js")
        }
    });
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        window.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
        window.loadFile(path.join(import.meta.dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    }

    window.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});