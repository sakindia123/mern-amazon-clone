import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './context/StateProvider';
import { reducer, initialState } from './context/Reducer'

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StateProvider >,
    document.getElementById('root')
);