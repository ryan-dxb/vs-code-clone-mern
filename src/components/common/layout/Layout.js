import {styled} from "@mui/material/styles";
import Header from "../header/Header";

const LayoutContainer = styled("div")({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
})

const Page = styled("div")({
    height: "100%",
})

const Layout = ({children}) => {
    return (
        <LayoutContainer>
            <Header/>
            <Page>
                {children}
            </Page>
        </LayoutContainer>
    )
}


export default Layout;