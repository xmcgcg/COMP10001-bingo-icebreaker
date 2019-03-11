import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/icon.css';

/**
 * Wrapper of a fontawesome icon.
 * @property {string} icon: The icon string from fontawesome, the corresponding icon should be preloaded into the library.
 * @property {callback} onclick: To be invoked upon clicking the icon.
 */
export default function IconWrapper(props) {
    return (
        <div className="icon-wrapper" onClick={props.onclick}>
            <FontAwesomeIcon icon={["far", props.icon]} />
        </div>
    );
}