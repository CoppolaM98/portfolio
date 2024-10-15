import {notificationManager} from "./notification/NotificationManager";
import { saveAs } from "file-saver";

export const copyToClipboardJson = (json: string) => {
    navigator.clipboard.writeText(json);
    notificationManager.create({
        title: "message copied",
        key: "COPY_JSON_DETAILS",
    });
}

export const downloadJson = (json: string, filename: string) => {
        const blob = new Blob([json], { type: "application/json" });
        saveAs(blob, filename);
}