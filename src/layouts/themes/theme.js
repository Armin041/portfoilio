import { createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

//NOTE Create Custom Theme
export const darktheme = createTheme({
    direction: "rtl",
    palette: {
        mode: 'dark',


    },
    typography: {
        fontFamily: [

            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

    components: {

        MuiFab: {
            styleOverrides: {
                circular: {
                    backgroundColor: "#FAEDE3",
                    color: "#181A18",
                    ":hover": {
                        backgroundColor: "#181A18",
                        color: "#3c52b2"
                    }
                }
            }
        },
    },
});

export const lighttheme = createTheme({
    direction: "rtl",
    palette: {
        mode: 'light',


    },
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

    components: {
        MuiFab: {
            styleOverrides: {
                circular: {
                    backgroundColor: "#181A18",
                    color: "#FAEDE3",
                    ":hover": {
                        backgroundColor: "#FAEDE3",
                        color: "#ec644b"
                    }
                }
            }
        },
    },
});
