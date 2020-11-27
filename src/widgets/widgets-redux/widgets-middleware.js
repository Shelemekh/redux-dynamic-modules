import { CORE_APPLICATION_STARTED, appConfigRequested } from './widgets-actions';


export const widgetMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CORE_APPLICATION_STARTED: {
    console.log('CORE MIDDLEWARE TRIGGERED');
      store.dispatch(appConfigRequested());
      next(action)
      break;
    }
    default:
        next(action);
        break;
  }
};
export default widgetMiddleware;
