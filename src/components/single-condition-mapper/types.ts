export interface SingleConditionMapperProps {
    condition: unknown;
    render: () => JSX.Element;
    elseRender?: () => JSX.Element;
}