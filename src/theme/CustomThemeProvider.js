import {ThemeProvider, createTheme} from "@mui/material/styles";
import {commonColors, darkColors, lightColors} from "./colors";

const CustomThemeProvider = (props) => {
    const darkMode = false;
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