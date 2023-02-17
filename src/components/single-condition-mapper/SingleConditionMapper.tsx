import { useCallback } from "react";
import { SingleConditionMapperProps } from "./types";

const SingleConditionMapper: React.FC<SingleConditionMapperProps> = ({ condition, render, elseRender }) => {

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

export default SingleConditionMapper;