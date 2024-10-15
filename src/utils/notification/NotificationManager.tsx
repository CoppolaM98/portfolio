import { EventEmitter } from "events";
import { NotificationDetails } from "./NotificationDetailsModal";
import { v4 as uuid } from 'uuid';
import { Optional } from "utils/types/Optional";

export interface NotificationData {
  title: string;
  type: "success" | "error" | "warning" | "info";
  message?: string;
  details?: NotificationDetails[];
  priority?: number;
  closable: boolean;
  permanent?: boolean;
  onClose?: () => void;
  startShowing?: number;
  enableRefreshPanel?: boolean;
}

export type NotificationRequestersMap = Map<string, NotificationData>

export type NotificationsChangeHandler = (notifications: NotificationRequestersMap) => void

class NotificationManager extends EventEmitter {
  notifications: NotificationRequestersMap;

  constructor() {
    super();
    this.notifications = new Map();
  }



  create(detail: Optional<NotificationData, "type" | "closable"> & { key?: string }) {

    const requester = detail.key ?? uuid()

    delete detail.key

    const notification: NotificationData = {
      ...detail,
      type: detail.type || "info",
      closable: detail.closable ?? true,
    };

    this.notifications.set(requester, notification);
    this.emitChange();
  }

  remove(key: string, ignoreOnClose?: boolean) {
    if (!ignoreOnClose) this.notifications.get(key)?.onClose?.();
    this.notifications.delete(key);
    this.emitChange();
  }

  private emitChange() {
    this.emit("NOTIFICATION", this.notifications);
  }

  addChangeListener(callback: NotificationsChangeHandler) {
    this.addListener("NOTIFICATION", callback);
  }

  removeChangeListener(callback: NotificationsChangeHandler) {
    this.removeListener("NOTIFICATION", callback);
  }
}

export const notificationManager = new NotificationManager();
