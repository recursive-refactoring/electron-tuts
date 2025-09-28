import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  newWindow: () => {
    ipcRenderer.send("new-window");
  },
});
