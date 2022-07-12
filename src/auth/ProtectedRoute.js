import {withAuthenticationRequired} from '@auth0/auth0-react';
import Loading from "../components/common/loading/Loading";
import {Route} from "react-router-dom";

const ProtectedRoute = ({component, ...args}) => (
    <Route
        component={withAuthenticationRequired(component, {
            onRedirecting: () => <Loading/>
        })}
        {...args}
    />
)

export default ProtectedRoute;