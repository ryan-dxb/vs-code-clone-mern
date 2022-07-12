import Layout from "../../components/common/layout/Layout";
import {styled} from "@mui/material/styles";
import ProgrammingLanguagesList from "../../components/home/programming-languages/ProgrammingLanguagesList";

const HomeContainer = styled("div")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
}))

const WelcomeMessage = styled("div")(({theme}) => ({
    padding: "15px",
    fontSize: "30px",
    color: theme.font,
}))

const Home = () => {
    return (
        <Layout>
            <HomeContainer>
                <WelcomeMessage>
                    Welcome to the Code Editor!
                </WelcomeMessage>
                <ProgrammingLanguagesList/>
            </HomeContainer>
        </Layout>
    )
}


export default Home;