import React from 'react';


/**
 * Abstract Component.
 */
export default abstract class AbstractComponent<PropType, StateType, SS> extends React.Component<PropType, StateType, SS> {
    public render(): any {
        throw new TypeError('Have to implment ::render method');
        return null;
    }
}
