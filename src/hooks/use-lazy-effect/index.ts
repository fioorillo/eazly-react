import { useEffect, useRef, DependencyList, EffectCallback } from "react";


export const useLazyEffect = (effect: EffectCallback, deps: DependencyList) => {

    const isMount = useRef(true);

    useEffect(() => {
        if (isMount.current) {
            isMount.current = false;
            return;
        }

        return effect();

    }, deps)

}