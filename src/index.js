import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
 
import reducer from './store/reducer';
import App from "./components/app";

import './base.scss';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById("root")
);
