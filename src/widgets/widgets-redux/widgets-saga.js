import { call, put,takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { setAppConfig, CORE_APPCONFIGURATION_LOAD_FAILD,CORE_APPCONFIGURATION_REQUESTED } from "./widgets-actions";

function* appConfigProcessed() {
    debugger;
    try {
        console.log('CORE SAGA TRIGGERED');
        const { protocol, hostname, port } = window.location;
        const configurationUrl = `${protocol}//${hostname}:${port}/config.json`;
        const response = yield call(fetchConfig, configurationUrl);
      debugger;
        yield put(setAppConfig(response.data));
      } catch (e) {
        yield put({type: CORE_APPCONFIGURATION_LOAD_FAILD});
      }
}

export function* widgetSaga() {
    yield takeEvery(CORE_APPCONFIGURATION_REQUESTED, appConfigProcessed);
  }
  
  export default widgetSaga;

  function fetchConfig(url){
      return axios.get(url);

  }