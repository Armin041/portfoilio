import { GitHub, Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import { Avatar, Box, Divider, Hidden, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import aks from '../../asset/BUozH5mF_400x400.jpg'

const SidebarHeader = () => {
    return (

        <>

            <Box sx={{ marginTop: "1rem", justifyContent: "center", textAlign: "center" }} >
                {/* <Hidden mdDown> */}

                <Avatar alt='آرمین شجاع ' src={aks}
                    sx={{ height: 150, width: 150, margin: "0 auto" }}
                />
                {/* </Hidden> */}
                <Typography color='text.primary' variant='h6' sx={{ marginTop: "5px" }}>شبکه های اجتماعی :</Typography>
                {/* <Typography fontSize="15px" fontFamily="arial" color='whitesmoke' variant='caption' > {"<"} برنامه نویس ری اکت هستم {"/>"} </Typography> */}
                <Box>
                    <IconButton>
                        <a
                            href="https://github.com/Armin041"
                            target="_blank"

                        >
                            <GitHub color="primary" />
                        </a>
                    </IconButton>
                    <IconButton >
                        <a
                            href="https://t.me/Arwmin"
                            target="_blank"

                        >
                            <Telegram color="primary" />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a
                            href="https://instagram.com/armin.shojaa"
                            target="_blank"

                        >
                            <Instagram
                                color="primary"
                            />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a
                            href="https://linkedin.com"
                            target="_blank"

                        >
                            <LinkedIn color="primary" />
                        </a>
                    </IconButton>
                </Box>

            </Box>
            <Divider variant='middle' sx={{ marginTop: '4px' }} />
        </>
    );
}

export default SidebarHeader;