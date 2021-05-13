import { createMuiTheme } from '@material-ui/core/styles'

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1769aa"
        },
        secondary: {
            main: "#ff9800",
            light: "#ffa726"
        },
        text: {
            secondary: "#868686"
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: "700",
            fontSize: "1rem"
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        },
        h2: {
            fontSize: "2.5em",
            fontWeight: 700,
            fontFamily: "Raleway",
            lineHeight: 1.5
        },
        h4: {
            fontSize: "1.75rem",
            fontWeight: 700,
            fontFamily: "Raleway"
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300
        }
    }
})