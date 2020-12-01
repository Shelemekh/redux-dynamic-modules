import { DEFAULT_INFO_LOADED } from "./appInfo-actions";

const initialState = {appName: "custom", defaultBackground:'blue'};
export const appInfoReducer = (state=initialState, action) => {
    debugger;
        switch (action.type) {
           
            case DEFAULT_INFO_LOADED: {
                console.log('CUSTOM REDUCER TRIGGERED');                      
                return {
                    ...state,
                    defaultBackground:'pink'
                }       
            }
           
            default: {
                return state;
            }
        }
    
};
