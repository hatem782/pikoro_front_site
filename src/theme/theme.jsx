import React from "react";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            lighter: "#16C799",
            main: "#2EBA95",
            darker: "#15AB84",
        },
        secondary: {
            main: "#186A8F",
        },
        white: {
            main: "#FFFFFF",
            darker:"#F6F7F7",
        },
        black: {
            main: "rgba(0, 0, 0, 0.8)",
        },
    },
});


const Theme = (props) => {
    const {children}=props;
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
