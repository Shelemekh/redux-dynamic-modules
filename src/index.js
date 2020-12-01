import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import { Provider} from "react-redux";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from 'redux-saga';
// createStore allows us to load/unload modules dynamically.
import { createStore } from "redux-dynamic-modules-core";
// import { moduleEnhancer } from "redux-dynamic-modules";
// Saga extension allows us to use Saga middleware in the module store.
import { getSagaExtension } from "redux-dynamic-modules-saga";
// Thunk extension allows us to use Thunk middleware in the module store.
import { getThunkExtension } from "redux-dynamic-modules-thunk";
// import {applyMiddleware} from 'redux';
import widgetMiddleware from './core/widgets-redux/widgets-middleware';
import widgetSaga from './core/widgets-redux/widgets-saga';

import {getWidgetModule} from './core/widgets-redux/widget-module';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore({
    initialState: {appState: {activeModule:[]}},  
    enhancements: [offline(offlineConfig)],
    extensions: [getThunkExtension(), getSagaExtension(), {
        middleware: [createLogger({ collapsed: true, diff: true }), widgetMiddleware]
      }],
    advancedComposeEnhancers: composeWithDevTools({
        maxAge: 500,
    })
},
getWidgetModule()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
        </Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
