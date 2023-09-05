import { MenuRounded } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { useContext } from "react";
import { mainContext } from "../../context/mainContext";


const DrawerFab = () => {

    const { handleDrawerToggle } = useContext(mainContext)

    return (

        <>
            <Box sx={{
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                },
                position: "absolute"
            }}>

                <Fab size="medium" color="primary" aria-label="add" sx={{ m: 2 }}
                    onClick={handleDrawerToggle}
                >
                    <MenuRounded />
                </Fab>
            </Box>

        </>
    );
}

export default DrawerFab;