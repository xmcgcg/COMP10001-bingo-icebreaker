import React, { useState } from 'react';

import IdleListItem from './IdleListItem';
import HoveredListItem from './HoveredListItem';

/**
 * A name list item not under editing.
 * @property {callback} checkIsEditing: To be invodked upon checking whether another item is under editing.
 * @property {string} name: The original name of the list item.
 * @property {callback} startEditItem: To be invoked upon starting the edit.
 * @property {callback} removeItem: To be invoked upon removing the item.
 */
export default function NonEditingListItem(props) {
    const [isMouseOver, setMouseOver] = useState(false);
    const enterEvent = () => setMouseOver(true);
    const leaveEvent = () => setMouseOver(false);

    const { checkIsEditing, ...other } = props;

    return (
        <li className="name-list-item" onMouseEnter={enterEvent} onMouseLeave={leaveEvent}>
            {isMouseOver && !checkIsEditing() ? <HoveredListItem {...other} /> : <IdleListItem {...other} />}
        </li>
    );d
}