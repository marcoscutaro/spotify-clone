import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T{
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        }

    }, [value,delay]);

    return debouncedValue;

};

// when we start typyingwe are going to use this debaunce to get the result only after 500 miliseconds of the user not typying anything and that way we wont rehuse our API calls

export default useDebounce;