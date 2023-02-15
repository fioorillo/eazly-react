import { useLayoutEffect, useRef, DependencyList, EffectCallback } from "react";


const useLazyLayoutEffect = (effect: EffectCallback, deps: DependencyList) => {

    const isMount = useRef(true);

    useLayoutEffect(() => {
        if (isMount.current) {
            isMount.current = false;
            return;
        }

        return effect();

    }, deps)

}

export default useLazyLayoutEffect;