import AuthProvider from "./auth/AuthProvider";
import {Suspense} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import CustomThemeProvider from "./theme/CustomThemeProvider";
import Routes from "./routes/Routes";
import StoreProvider from "./store/StoreProvider";
import Loading from "./components/common/loading/Loading";

function App() {
    return (
        // <Suspense fallback={<Loading/>}>
        <StoreProvider>
            <Router>
                <AuthProvider>
                    <CustomThemeProvider>
                        <Routes/>
                    </CustomThemeProvider>
                </AuthProvider>
            </Router>
        </StoreProvider>
        // </Suspense>
    );
}

export default App;
