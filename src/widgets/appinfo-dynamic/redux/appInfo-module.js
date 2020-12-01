import { appInfoReducer } from "./appInfo-reducer";
import { appInfoSaga } from "./appInfo-saga";

export function getAppInfoModule() {
    return {
        // Unique id of the module
        id: "appInfo",
        initialState:{appName: "custom", defaultBackground:'pink'},
        // Maps the Store key to the reducer
        reducerMap: {
            appInfom: appInfoReducer,
        },
        // This module uses redux-saga middleware
        // This property will be be used by the SagaExtension
        // to run sagas for the moduleD
        sagas: [appInfoSaga],
    };
}
