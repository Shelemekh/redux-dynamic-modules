import { call, put,takeEvery } from "redux-saga/effects";
import { DEFAULT_INFO_LOADED } from "../actions/appInfo-actions";

function* addConsoleMessage() {
        const response = yield call(fetchMessage);        
      return response;
}

export function* appInfoSaga() {
    yield takeEvery(DEFAULT_INFO_LOADED, addConsoleMessage);
  }
  
  export default appInfoSaga;

  function fetchMessage(){
      return console.log('CORE APP SAGA TRIGGERED')

  }