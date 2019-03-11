import React, { useState } from 'react';

import IdleListItem from './list_item/IdleListItem';
import HoveredListItem from './list_item/HoveredListItem';
import EditingListItem from './list_item/EditingListItem';
import AddItemButton from './AddItemButton';
import './css/list.css';

/**
 * A list of student names.
 */
export default function NameList(props) {
    const [names, setNames] = useState([]);
    const [focus, setFocus] = useState(null);
    const [editTarget, setEditTarget] = useState(null);

    const handleSetFocus = name => setFocus(name);
    const handleUnsetFocus = () => setFocus(null);
    const handleStartEdit = name => setEditTarget(name);
    const handleStartAdd = () => setEditTarget("");
    const handleCancelInput = () => setEditTarget(null);
    const handleFinishInput = (origName, newName) => {
        let newNames = names.slice();
        if (origName === "") {
            newNames.push(newName);
        } else {
            const index = newNames.indexOf(editTarget);
            if (index === -1) {
                throw new Error("Editing a non-existing list item.");
            }
            newNames[index] = newName;
        }
        setNames(newNames);
        setEditTarget(null);
    }
    const handleRemoveItem = name => {
        let newNames = names.slice();
        const index = newNames.indexOf(name);
        if (index === -1) {
            throw new Error("Removing a non-existing list item.");
        }
        newNames.splice(index, 1);
        setNames(newNames);
    }

    const name2idle = name => <IdleListItem name={name} mouseIn={() => handleSetFocus(name)} />;
    const name2hovered = name => (<HoveredListItem name={name} mouseOut={handleUnsetFocus}
        startEditItem={() => handleStartEdit(name)} removeItem={() => handleRemoveItem(name)} />);
    const name2editing = name => (<EditingListItem name={name}
        finishEditItem={newName => handleFinishInput(name, newName)} cancelEditItem={handleCancelInput} />);
    const name2func = name => name === editTarget ? name2editing : (name === focus ? name2hovered : name2idle);

    return (
        <div className="name-list-wrapper">
            <ul className="name-list">
                {/* Bug: repeated names are allowed, it may result in repeated keys */}
                {names.map(name => <li key={name}>{name2func(name)(name)}</li>)}
                {editTarget === "" ? <li key="">{name2editing("")}</li> : null}
            </ul>
            {editTarget === null ? <AddItemButton onclick={handleStartAdd} /> : null}
        </div>
    );
}