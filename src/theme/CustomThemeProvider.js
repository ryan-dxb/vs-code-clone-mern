import {ThemeProvider, createTheme} from "@mui/material/styles";
import {commonColors, darkColors, lightColors} from "./colors";
import {useSelector} from "react-redux";

const CustomThemeProvider = (props) => {
    const darkMode = useSelector(state => state.darkMode.isDarkMode);
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: commonColors.primary
            },
        },
        background: darkMode ? darkColors.background : lightColors.background,
        font: darkMode ? darkColors.font : lightColors.font,
        commonColors: commonColors,
    })

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider;