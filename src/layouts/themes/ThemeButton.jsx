import { DarkModeRounded, LightModeRounded, MenuRounded } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { useContext } from "react";
import { mainContext } from "../../context/mainContext";
import { useTheme } from "@mui/material";

const ThemeFab = () => {

    const { handleThemeChange } = useContext(mainContext);
    const theme = useTheme()


    return (

        <>
            <Box sx={{
                display: "flex",
                justifyContent: 'right',

            }}>

                <Fab variant="circular" size="medium" aria-label="ChangeTheme"
                    sx={{
                        m: 2,
                        justifyContent: 'center',
                        position: "absolute"
                    }} onClick={handleThemeChange}
                >
                    {theme.palette.mode === "dark" ? <DarkModeRounded sx={{ mr: 1 }} /> : <LightModeRounded sx={{ mr: 1 }} />}

                </Fab>
            </Box>

        </>
    );
}

export default ThemeFab;