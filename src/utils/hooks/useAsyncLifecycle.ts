import { useState, useEffect } from 'react';

export enum AsyncStatus {
    NOT_STARTED = "NOT_STARTED",
    STARTED = "STARTED",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
  };

export const useAsyncLifecycle: <S>(promiseGenerator: () => Promise<S>, disableAutostart?: boolean, disableRefresh?: boolean) => [S | undefined, AsyncStatus, () => void] = <S>(promiseGenerator: () => Promise<S>, disableAutostart?: boolean, disableRefresh?: boolean) => {

    const [{ value, status }, setPromiseState] = useState<{ value: S | undefined, status: AsyncStatus }>({
        value: undefined,
        status: AsyncStatus.NOT_STARTED,
    });

    const _refresh = () => {
        setPromiseState({
            value: undefined,
            status: AsyncStatus.STARTED
        })

        promiseGenerator().then(value => setPromiseState({
            value,
            status: AsyncStatus.SUCCESS
        })).catch(err => setPromiseState({
            value: undefined,
            status: AsyncStatus.ERROR
        }))
    }

    useEffect(() => {
        if (!disableAutostart) _refresh();
    }, []);

    const refresh = () => {
        if(disableRefresh) return;
        _refresh();
    }


    return [value, status, refresh];
};