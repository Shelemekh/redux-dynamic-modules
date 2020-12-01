// import { offline } from "@redux-offline/redux-offline";
// import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import React, { Component } from "react";
// We will load the widgets async using react-loadable.
import Loadable from "react-loadable";
import { connect } from "react-redux";
// import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from "redux-devtools-extension";
// // createStore allows us to load/unload modules dynamically.
// import { createStore } from "redux-dynamic-modules-core";
// // import { moduleEnhancer } from "redux-dynamic-modules";
// // Saga extension allows us to use Saga middleware in the module store.
// import { getSagaExtension } from "redux-dynamic-modules-saga";
// // Thunk extension allows us to use Thunk middleware in the module store.
// import { getThunkExtension } from "redux-dynamic-modules-thunk";
// import {applyMiddleware} from 'redux';
import {runApplication, onWeatherToggledAction, onHackerNewsToggledAction} from './core/widgets-redux/widgets-actions';
import {defaultLoaded} from './widgets/appinfo-dynamic/redux/appInfo-actions';
import AppInfo from './core/app-info/App-info';
import "./App.css";
// import widgetMiddleware from './widgets/widgets-redux/widgets-middleware';
// import widgetSaga from './widgets/widgets-redux/widgets-saga';
// import {widgetReducer} from './widgets/widgets-redux/widgets-reducer';
class App extends Component {
    constructor(props) {
        super(props);

        // // define the initial state where none of the widgets are visible
        this.state = {
            defaultAppInfo: true,
        };

        /**
         * configure the store and load the thunk and saga extension
         * The extensions are optional and you can choose extension based on the middleware you use
         * You can also build your own extensions for any other middleware e.g. redux-observable
         */
        // this.store = createStore({
        //     reducers:[widgetReducer],
        //     enhancements: [offline(offlineConfig),applyMiddleware(widgetMiddleware)],
        //     extensions: [getThunkExtension(), getSagaExtension(widgetSaga()), {
        //         middleware: [createLogger({ collapsed: true, diff: true })]
        //       }],
        //     advancedComposeEnhancers: composeWithDevTools({
        //         maxAge: 500,
        //     })
        // });
    }

    componentDidMount(){
        const {appLoadedInfoMessage} = this.props;
        appLoadedInfoMessage();
    }
 handleAppInfoChange = ()=>{
    //  const {appInfoLoaded} = this.props;
     const {defaultAppInfo} = this.state;
     this.setState({defaultAppInfo:!defaultAppInfo})
    //  appInfoLoaded();
 }

    render() {
        const {onWeatherToggled, onHackerNewsToggled} = this.props;
     
        return (
            <div className="App">
                <div role="button" onClick={()=> this.handleAppInfoChange()}>{this.getCustomAppInfo()}</div>           
                <h1>Widgets</h1>
                <div className="checkboxes">
                    <input
                        type="checkbox"
                        onChange={()=>onHackerNewsToggled()}
                    />
                    <label>Hacker News</label>
                    <input type="checkbox" onChange={()=>onWeatherToggled()} />
                    <label>Weather</label>
                </div>
                <div className="widgets">{this.renderContent()}</div>
            </div>
        );
    }

    // onHackerNewsToggled = () => {
    //     this.setState({ hackerNews: !this.state.hackerNews });
    // };
    // onWeatherToggled = () => {
    //     this.setState({ weather: !this.state.weather });
    // };

    renderContent = () => {    
       
        return (
            // Pass the configured store to redux Provider
            // and render the widgets based on the state
            // <Provider store={this.store}>
                <>
                    {this.getHackerNews()}
                    {this.getWeather()}
                </>
            // </Provider>
        );
    };

    _hackerNews = null;
    getHackerNews() {
        const {activeModule} = this.props;
        const isHackerNewsActivated= activeModule.some((module)=>(module==="hackernews"));
   
        if (!isHackerNewsActivated) {
            return null;
        }

        if (this._hackerNews) {
            return this._hackerNews;
        }

        const LoadableHackerNews = Loadable({
            loader: () => import("./widgets/hacker-news"),
            loading: () => <div>Loading Scripts...</div>,
        });
        this._hackerNews = <LoadableHackerNews />;
        return this._hackerNews;
    }

    getWeather() {
        const {activeModule} = this.props;
        const isWeatherActivated = activeModule.some((module)=> {return module==="weather"});
        if (!isWeatherActivated) {
            return null;
        }
        if (this._weather) {
            return this._weather;
        }

        const LoadableWeather = Loadable({
            loader: () => import("./widgets/weather"),
            loading: () => <div>Loading Scripts...</div>,
        });
        this._weather = <LoadableWeather />;
        return this._weather;
    }

    getCustomAppInfo() {
        const {defaultAppInfo} = this.state;
        const {appInfoLoaded} = this.props;     
        
       
        const LoadableAppInfo = Loadable({
            loader: () => import("./widgets/appinfo-dynamic"),
            loading: ()  => <div>Loading Scripts...</div>,
        });
         
        return defaultAppInfo ? <AppInfo/> : <LoadableAppInfo />;
    }
}

const mapStateToProps = (state) => {
    return {
      appConfig: state.appState.appConfig,
      activeModule: state.appState.activeModule
    };
  };
const mapDispatchToProps = (dispatch) => ({
    appLoadedInfoMessage: () => dispatch(runApplication()),
    onWeatherToggled:() => dispatch(onWeatherToggledAction()),
    onHackerNewsToggled: () => dispatch(onHackerNewsToggledAction()),
    appInfoLoaded: ()=>dispatch(defaultLoaded())
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
