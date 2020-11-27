import produce from "immer";
import { WeatherLoaded } from "./weather-actions";

export const weatherReducer = (state, action) => {
    return produce(state || {}, draft => {
        switch (action.type) {
            case WeatherLoaded: {
                console.log('DYNAMIC REDUCER TRIGGERED');
                draft.weather = action.payload;
                break;
            }

            default: {
                //do nothing
            }
        }
    });
};
