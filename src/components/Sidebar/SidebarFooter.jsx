import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";


const SidebarFooter = () => {
    return (

        <>
            <Box sx={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flexGrow: 1, marginTop: "110px"


            }}>
                <Typography color="text.primary">
                    طراحی شده با {" "} <FavoriteRounded sx={{
                        color: "tomato",
                        verticalAlign: 'middle',
                        height: 20
                    }} />
                </Typography>
                <Typography color="text.primary">
                    کپی رایت 1402 {" "} <CopyrightRounded sx={{

                        verticalAlign: 'middle',
                        height: 20
                    }} />
                </Typography>
            </Box>
        </>
    );
}

export default SidebarFooter;