import { DEFAULT_INFO_LOADED } from "../actions/appInfo-actions";

const initialState = {appName: "default", defaultBackground:'red'};
export const appInfoReducer = (state=initialState, action) => {
    
        switch (action.type) {
           
            case DEFAULT_INFO_LOADED: {
                console.log('CORE REDUCER TRIGGERED');                      
                return {
                    ...state,
                    defaultBackground:'white'
                }       
            }
           
            default: {
                return state;
            }
        }
    
};
