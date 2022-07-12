import {Auth0Provider} from "@auth0/auth0-react";
import config from "../config";
import {useHistory} from 'react-router-dom';


const AuthProvider = ({children}) => {
    const history = useHistory();

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    }

    return (
        <Auth0Provider
            domain={config.auth0Domain}
            clientId={config.auth0ClientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default AuthProvider;