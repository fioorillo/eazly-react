import { useEffect, useRef, DependencyList, EffectCallback } from "react";


const useLazyEffect = (effect: EffectCallback, deps: DependencyList) => {

    const isMount = useRef(true);

    useEffect(() => {
        if (isMount.current) {
            isMount.current = false;
            return;
        }

        return effect();

    }, deps)

}

export default useLazyEffect;