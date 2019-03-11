import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import * as serviceWorker from './serviceWorker';
import NameList from './components/name_list/NameList';

library.add(faCheckCircle, faTimesCircle, faEdit, faTrashAlt);

ReactDOM.render(<NameList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
