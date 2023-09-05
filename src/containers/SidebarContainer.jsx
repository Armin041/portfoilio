import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";


const SidebarContainer = ({ children }) => {

    const theme = useTheme()

    return (

        <>
            <Grid2
                xs={0}
                sm={0}
                md={3}
                lg={2}
                xl={2}
                sx={{
                    height: "100vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                    backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[300],
                    "&.MuiGrid2-root::-webkit-scrollbar": {
                        display: "none"
                    },

                }}
            >
                {children}
            </Grid2 >
        </>
    );
}

export default SidebarContainer;