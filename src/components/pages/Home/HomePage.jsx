import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import background from '../../../asset/eCommerce Website Character design.png'
import { useEffect, useRef } from "react";

import Typed from "typed.js";

import { Helmet } from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ImportantDevices } from "@mui/icons-material";

const HomePage = () => {

    const nameTypeRef = useRef(null);

    const infotypeRef = useRef(null);

    const typingStrings =
        ['تحت وب',
            'ری اکت',
            'فرانت اند']

    useEffect(() => {
        const nametype = new Typed(nameTypeRef.current, {

            strings: ["آرمین شجاع"],
            typeSpeed: 100,
            backSpeed: 30,
            backDelay: 10,
            showCursor: false
        });

        const infotype = new Typed(infotypeRef.current, {

            strings: typingStrings,
            startDelay: 1500,
            typeSpeed: 180,
            backSpeed: 90,
            backDelay: 60,
            loop: true
        });

        return () => {

            infotype.destroy();
        }
    }, [])

    const theme = useTheme()




    return (

        <>


            <Helmet>
                <title> پورتفولیو | صفحه اصلی</title>
            </Helmet>


            <Card sx={{
                backgroundColor: "primary",
                height: "100vh",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                // position: "relative"


            }}>

                <CardContent sx={{ borderRadius: 0 }}>
                    <Grid2 container>
                        <Grid2
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                mt: {
                                    xs: 10,
                                    sm: 4,
                                    md: 4
                                }
                            }}
                        >
                            <Typography ref={nameTypeRef} variant="h3" ></Typography>



                            <div>

                                <Typography color="text.secondary" display="inline" variant="h4" > برنامه نویس  </Typography>
                                <Typography display="inline" ref={infotypeRef} variant="h4" ></Typography>



                            </div>

                        </Grid2>

                        <Grid2
                            xs={12}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            <img src={background} style={{
                                objectFit: "cover",

                            }} />
                        </Grid2>

                    </Grid2>
                    {/* 
                    <Box sx={{
                        mt: "5rem"
                    }}>
                    </Box> */}
                    {/* <Box>
                        <img src={background} style={{}} />
                    </Box> */}
                </CardContent>

            </Card >


        </>
    );
}

export default HomePage;