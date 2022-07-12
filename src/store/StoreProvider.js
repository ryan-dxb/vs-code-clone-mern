import {Provider} from "react-redux";
import store from "./index";
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./index";
import Loading from "../components/common/loading/Loading";

const StoreProvider = ({children}) => {
    return (

        <Provider store={store}>
            <PersistGate loading={<Loading/>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}


export default StoreProvider;