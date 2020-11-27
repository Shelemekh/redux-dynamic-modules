import produce from "immer";
import { CORE_HACKERNEWS_TOGGLED,CORE_WEATHER_TOGGLED, CORE_APPCONFIGURATION_LOAD_SUCCEEDED } from "./widgets-actions";

export const widgetReducer = (state, action) => {
    return produce(state || {}, draft => {
        switch (action.type) {
           
            case CORE_HACKERNEWS_TOGGLED: {
                console.log('CORE REDUCER TRIGGERED');
                const moduleName = 'hackernews';
                const {activeModule} = state;
                
                const isModuleActivated = activeModule.some((module) => module ===moduleName)
                let newAppState =  [...activeModule];
                if(isModuleActivated){
                    newAppState = newAppState.filter((module) =>module!==moduleName);                 
                } else{
                    newAppState.push(moduleName);
                } 
                return{
                    ...state,
                    activeModule:newAppState
                }
            }
            case CORE_WEATHER_TOGGLED: {
                console.log('CORE REDUCER TRIGGERED');
                const moduleName = 'weather';
                const {activeModule} = state;
                const isModuleActivated = activeModule.some((module) => module ===moduleName)
                let newAppState =   [...activeModule];
                if(isModuleActivated){
                    newAppState = newAppState.filter((module) =>module!==moduleName);                  
                } else{
                    newAppState.push(moduleName);
                } 
                return{
                    ...state,
                    activeModule: newAppState
                }
            }
            case CORE_APPCONFIGURATION_LOAD_SUCCEEDED: {
                console.log('CORE REDUCER TRIGGERED');
                const {appConfig} = action.payload;
                return {
                    ...state,
                    appConfig
                }
            }
            default: {
                return state;
            }
        }
    });
};
