import React from 'react';
import './css/common.css';

/**
 * A name list item not being focused on.
 * @property {string} name: The name of the list item.
 * @property {callback} mouseIn: To be invoked upon mouse reaching the list item.
 */
export default function IdleListItem(props) {
    return (
        <div className="list-item-inner unhighlighted-list-item" onMouseEnter={props.mouseIn}>
            <span className="list-item-name unhighlighted-name">
                {props.name}
            </span>
        </div>
    );
}