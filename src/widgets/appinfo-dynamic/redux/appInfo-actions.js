export const DEFAULT_INFO_LOADED= "DEFAULT_INFO_LOADED";

// action creator : StoriesAvailable
export const defaultLoaded = () => {
    return {
        type: DEFAULT_INFO_LOADED
    };
};


// export const onHackerNewsToggledAction = () => {
//     return {
//         type: CORE_HACKERNEWS_TOGGLED
//     };
// };

// export const onWeatherToggledAction = () => {
//     return {
//         type: CORE_WEATHER_TOGGLED
//     };
// };

// export const appConfigRequested = () => {
//     return {
//         type: CORE_APPCONFIGURATION_REQUESTED
//     };
// };

// export const setAppConfig = (appConfig) =>{
//     return{
//         type: CORE_APPCONFIGURATION_LOAD_SUCCEEDED,
//         payload:{appConfig}
//     }
// }
