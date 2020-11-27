// import { weatherReducer } from "./weather-reducer";
import { widgetSaga } from "./widgets-saga";
import {widgetReducer} from './widgets-reducer';

export function getWidgetModule() {
    return {
        // Unique id of the module
        id: "core",
        // Maps the Store key to the reducer
        reducerMap: {
            appState: widgetReducer,
        },
        // This module uses redux-saga middleware
        // This property will be be used by the SagaExtension
        // to run sagas for the moduleD
        sagas: [widgetSaga],
    };
}
