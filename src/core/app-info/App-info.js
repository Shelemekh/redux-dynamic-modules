
import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.css";

class AppInfo extends Component {   
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
  appInfo: state.appInfo
    };
  };
// const mapDispatchToProps = (dispatch) => ({
   
//   });
  
  export default connect(mapStateToProps, null)(AppInfo);
