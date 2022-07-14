import {AppBar, Toolbar, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Link, useHistory} from "react-router-dom";
import paths from "../../../routes/paths";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import CodeEditorButton from "./CodeEditorButton";
import {useAuth0} from "@auth0/auth0-react";
import DarkModeSwitch from "./DarkModeSwitch";
import OpenWorkspaceButton from "./OpenWorkspaceButton";

const StyledLink = styled(Link)(({theme}) => ({
    textDecoration: "none",
    color: theme.commonColors.white,
}))

const Header = () => {
    const {isAuthenticated} = useAuth0();

    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" sx={{flex: 1}} color="inherit">
                    <StyledLink to={paths.home}>Code Editor</StyledLink>
                </Typography>
                <DarkModeSwitch/>
                {isAuthenticated ? <AuthenticatedButton/> : <UnauthenticatedButton/>}
            </Toolbar>
        </AppBar>
    )
}

const UnauthenticatedButton = () => {
    return (
        <div>
            <SignInButton/>
        </div>
    )
}

const AuthenticatedButton = () => {
    const history = useHistory();


    return (
        <div>
            {history.location.pathname === paths.home ? <CodeEditorButton/> : <OpenWorkspaceButton/>}
            <SignOutButton/>
        </div>
    )
}


export default Header;