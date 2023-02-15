import React from 'react';
import { ListMapperProps } from './types';

const ListMapper = <T extends unknown>({ list, elemRender, emptyListRender }: ListMapperProps<T>) => {
    if (!list || list.length === 0) {
        return emptyListRender?.()!! || null;
    }

    return (
        <React.Fragment>
            {list.map((elem, index) => elemRender(elem, index))}
        </React.Fragment>
    );
};


export default ListMapper;