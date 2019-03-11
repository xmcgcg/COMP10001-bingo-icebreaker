import React from 'react';
import './css/button.css';

/**
 * A button to add new names to the list.
 * @property {callback} onclick: To be invoked upon clicking.
 */
export default function AddItemButton(props) {
    return (
        <button className="add-list-item-button" onClick={props.onclick}>Add Name</button>
    );
}