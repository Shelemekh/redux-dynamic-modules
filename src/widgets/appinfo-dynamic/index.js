import { ConnectedAppInfo } from "./component/App-info";
import { getAppInfoModule } from "./redux/appInfo-module";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import * as React from "react";

export default function Dynamic() {
    return (
        <DynamicModuleLoader modules={[getAppInfoModule()]}>
            <ConnectedAppInfo />
        </DynamicModuleLoader>
    );
}
