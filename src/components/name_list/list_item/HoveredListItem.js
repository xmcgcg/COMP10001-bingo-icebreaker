import React from 'react';
import IconWrapper from './IconWrapper';
import './css/common.css';

/**
 * A name list item being focused.
 * @property {string} name: The name of the list item.
 * @property {callback} mouseOut: To be invoked upon mousing leaving the list item.
 * @property {callback} startEditItem: To be invoked upon starting the edit.
 * @property {callback} removeItem: To be invoked upon removing the item.
 */
 export default function HoveredListItem(props) {
    return (
        <div className="list-item-inner highlighted-list-item" onMouseLeave={props.mouseOut}>
            <span className="list-item-name highlighted-name">
                {props.name}
            </span>
            <IconWrapper icon="edit" onclick={props.startEditItem} />
            <IconWrapper icon="trash-alt" onclick={props.removeItem} />
        </div>
    );
}