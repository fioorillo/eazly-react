import { useCallback } from "react";
import { SingleConditionMapperProps } from "./types";

export const SingleConditionMapper: React.FC<SingleConditionMapperProps> = ({ condition, render, elseRender }) => {

    const isConditionVerified = useCallback(() => {
        if (condition instanceof Function) {
            return condition();
        }

        return condition;
    }, [condition]);

    return (
        <>
            {isConditionVerified() ? render() : elseRender?.() || null}
        </>
    );
}