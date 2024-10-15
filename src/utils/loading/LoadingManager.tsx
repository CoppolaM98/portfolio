import { EventEmitter } from "events";

export interface LoadingData {
  displayName?: string; 
}

export type LoadingRequestersMap = Map<string, LoadingData>

export type LoadingChangeHandler = (requesters: LoadingRequestersMap) => void

class LoadingManager extends EventEmitter {
  requesters: LoadingRequestersMap;
  
  constructor() {
    super();
    this.requesters = new Map();
  }

  create(requester: string, data?: LoadingData) {
    this.requesters.set(requester, data ?? {});
    this.emitChange();
  }

  remove(requester: string) {
    this.requesters.delete(requester);
    this.emitChange();
  }

  removeAll() {
    this.requesters.clear();
  }

  private emitChange() {
    this.emit("loading", this.requesters);
  }

  addChangeListener(callback: LoadingChangeHandler) {
    this.addListener("loading", callback);
  }

  removeChangeListener(callback: LoadingChangeHandler) {
    this.removeListener("loading", callback);
  }
}

export const loadingManager = new LoadingManager();
