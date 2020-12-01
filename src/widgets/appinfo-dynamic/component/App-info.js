
import React, { Component } from "react";
import { connect } from "react-redux";
import {defaultLoaded} from '../redux/appInfo-actions';
import "../../../App.css";

class AppInfo extends Component {   
  componentDidMount(){
const {defaultLoaded} = this.props;
defaultLoaded();
  }
    render() {
        const {appName, defaultBackground} = this.props.appInfo || {};        
        return (
            <div className="App-info" style={{backgroundColor:defaultBackground}}>
                <h1>{appName|| 'no name'}</h1>              
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
  appInfo: state.appInfom
    };
  };
const mapDispatchToProps = (dispatch) => ({
  defaultLoaded: ()=> dispatch(defaultLoaded())
  });
  
export const ConnectedAppInfo = connect(mapStateToProps,mapDispatchToProps)(AppInfo);
