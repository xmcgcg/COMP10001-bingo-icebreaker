import React, { useState } from 'react';
import IconWrapper from './IconWrapper';
import './css/common.css';
import './css/input.css';

/**
 * A name list item under editing.
 * @property {string} name: The original name of the list item.
 * @property {callback} finishEditItem: To be invoked (with the new name) upon finishing the edit.
 * @property {callback} cancelEditItem: To be invoked upon cancelling the edit.
 */
export default function EditingListItem(props) {
    const MAX_NAME_LENGTH = 20;
    const [text, setText] = useState(props.name);

    const checkText = text => {
        if (text === "") {
            alert("Name cannot be empty");
            return false;
        } else if (text.length > MAX_NAME_LENGTH) {
            alert(`Name cannot exceed ${MAX_NAME_LENGTH} characters`);
            return false;
        } else {
            return true;
        }
    }

    return (
        <div className="list-item-inner highlighted-list-item">
            <input type="text" value={text} onChange={event => setText(event.target.value)} />
            <IconWrapper icon="check-circle" onclick={() => checkText(text) ? props.finishEditItem(text) : null} />
            <IconWrapper icon="times-circle" onclick={props.cancelEditItem} />
        </div>
    );
}