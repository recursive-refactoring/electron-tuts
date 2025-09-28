import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./utils/env.js";

app.enableSandbox();

function loadFileSelector() {
  if (isDev()) return "http://localhost:5123";
  return path.join(app.getAppPath(), "/dist-react/index.html");
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      sandbox: true,
      webviewTag: true,
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.setContentProtection(true);
  win.loadURL(loadFileSelector());
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
