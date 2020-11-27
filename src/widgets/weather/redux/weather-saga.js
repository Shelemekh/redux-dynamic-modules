import { call, put,select } from "redux-saga/effects";
import { weatherLoaded } from "./weather-actions";


const appConfig = (state)=> state.appState.appConfig;

export function* weatherSaga() {
    yield call(loadWeatherData);
}

function* loadWeatherData() {
    console.log('DYNAMIC SAGA TRIGGERED');
    const config =  yield select(appConfig);
    const url = config ? config['weatherUrl'] : null;
        // "https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=1362c34423375d167d694489b1c74080";

    const response = yield call(fetch, url);
    const json = yield call([response, response.json]);

    yield put(weatherLoaded(json));
}
