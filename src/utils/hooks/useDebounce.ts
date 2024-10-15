import { useState, useEffect } from 'react';

export const useDebounce: <S>(value: S, delay: number) => [S, (v: S) => void, (v: S) => void] = <S>(value: S, delay: number) => {

    const [debouncedValue, setDebouncedValue] = useState<S>(value);
    const [timer, setTimer] = useState<NodeJS.Timeout>();

    const handleNewValue = (value: S) => {
        setTimer((oldTimer) => {
            clearTimeout(oldTimer);
            if(value === debouncedValue) return undefined;
            return setTimeout(() => {
                setDebouncedValue(value);
            }, delay)
        });
    }
    
    useEffect(() => {
        handleNewValue(value);
    }, [value, delay]);

    const override = (value: S) => {
        clearTimeout(timer);
        setDebouncedValue(value);
    }

    

    return [debouncedValue, handleNewValue, override];
};