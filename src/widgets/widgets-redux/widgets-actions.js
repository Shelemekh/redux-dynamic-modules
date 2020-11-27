export const CORE_APPLICATION_STARTED= "CORE_APPLICATION_STARTED";
export const CORE_APPCONFIGURATION_REQUESTED = "CORE_APPCONFIGURATION_REQUESTED";
export const CORE_APPCONFIGURATION_LOAD_SUCCEEDED = "CORE_APPCONFIGURATION_LOAD_SUCCEEDED";
export const CORE_APPCONFIGURATION_LOAD_FAILD = "CORE_APPCONFIGURATION_LOAD_FAILD";
export const CORE_HACKERNEWS_TOGGLED = "CORE_HACKERNEWS_TOGGLED";
export const CORE_WEATHER_TOGGLED = "CORE_WEATHER_TOGGLED";

// action creator : StoriesAvailable
export const runApplication = () => {
    return {
        type: CORE_APPLICATION_STARTED
    };
};


export const onHackerNewsToggledAction = () => {
    return {
        type: CORE_HACKERNEWS_TOGGLED
    };
};

export const onWeatherToggledAction = () => {
    return {
        type: CORE_WEATHER_TOGGLED
    };
};

export const appConfigRequested = () => {
    return {
        type: CORE_APPCONFIGURATION_REQUESTED
    };
};

export const setAppConfig = (appConfig) =>{
    debugger;
    return{
        type: CORE_APPCONFIGURATION_LOAD_SUCCEEDED,
        payload:{appConfig}
    }
}