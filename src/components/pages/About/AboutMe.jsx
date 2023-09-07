import { CodeRounded, EngineeringRounded, KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Avatar, Box, Card, CardContent, Chip, Divider, Tooltip, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import photo from '../../../asset/Just a 3D illustration of Khaby Lame by Gabriel Soares - Random.png'
import Skills from "./skils";

import { devSkills } from '../../../constantse/skills'
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { WorkInfo } from "../../../constantse/workInfo";


const AboutMe = () => {

    const [reactjs, setReactjs] = useState(0)
    const [javascript, setjavascript] = useState(0)
    const [wordpress, setwordpress] = useState(0)
    const [html, sethtml] = useState(0)
    const [css, setcss] = useState(0)
    const [git, setgit] = useState(0)
    const theme = useTheme();

    useEffect(() => {

        const rand = 10;

        const timer = setInterval(() => {
            setReactjs((prevProgress) => (prevProgress >= 85 ? 85 : prevProgress + rand));
            setjavascript((prevProgress) => (prevProgress >= 70 ? 70 : prevProgress + rand));
            setwordpress((prevProgress) => (prevProgress >= 90 ? 90 : prevProgress + rand));
            sethtml((prevProgress) => (prevProgress >= 95 ? 95 : prevProgress + rand));
            setcss((prevProgress) => (prevProgress >= 70 ? 70 : prevProgress + rand));
            setgit((prevProgress) => (prevProgress >= 80 ? 80 : prevProgress + rand));

        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const { reactSkills, javascriptSkills, wordpressSkills, htmlSkills, cssSkills, gitSkills } = devSkills
    return (

        <>
            <Helmet>
                <title> پورتفولیو |  درباره من</title>
            </Helmet>

            <div >

                <Card sx={{
                    backgroundColor: "primary", height: "100vh", overflow: "auto", "&.MuiCard-root::-webkit-scrollbar": {
                        display: "none"
                    }
                }} >

                    <CardContent >

                        <Grid2 container sx={{ mx: 3 }}>
                            <Grid2
                                xs={12}
                                sm={12}
                                md={9}
                                lg={9}
                                xl={9}
                            >

                                <Grid2 container
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-around"
                                    }}
                                >



                                    <Grid2
                                        xs={8}
                                        sm={8}
                                        md={9}
                                        lg={9}
                                        xl={9}
                                    >
                                        <Divider textAlign="left" sx={{
                                            "&::before, &::after": {
                                                borderColor: "primary.main",
                                            },
                                        }}>
                                            <Chip icon={<CodeRounded />} label={
                                                <Typography variant="body1" color="black" sx={{ textAlign: "center" }}>
                                                    درباره من
                                                </Typography>
                                            } color="primary" />
                                        </Divider>
                                        <Typography variant="h6" color={theme.palette.mode === "dark" ? "text.secondary" : "text.primary"} sx={{ mt: 3 }}>
                                            <KeyboardArrowLeftRounded sx={{ color: "primary.main", verticalAlign: "bottom" }} />
                                            نام و نام خانوادگی: آرمین شجاع
                                        </Typography>
                                        <Typography variant="h6" color={theme.palette.mode === "dark" ? "text.secondary" : "text.primary"} sx={{ mt: 3 }}>
                                            <KeyboardArrowLeftRounded sx={{ color: "primary.main", verticalAlign: "bottom" }} />
                                            ادرس ایمیل: armin.shojace@gmail.com
                                        </Typography>
                                        <Typography color={theme.palette.mode === "dark" ? "text.secondary" : "text.primary"} variant="h6" sx={{ mt: 3 }}>
                                            <KeyboardArrowLeftRounded sx={{ color: "primary.main", verticalAlign: "bottom" }} />
                                            شماره موبایل: 09363297274
                                        </Typography>
                                    </Grid2>

                                    <Grid2
                                        xs={4}
                                        sm={4}
                                        md={3}
                                        lg={3}
                                        xl={3}
                                        sx={{ color: "black", alignContent: "start", mt: 7 }}>

                                        {
                                            WorkInfo.map((item, index) => (

                                                <Box key={index} component="div" sx={{ width: 1, mb: 1 }}>
                                                    <Tooltip title={item.tooltipTitle} placement="right" arrow >

                                                        <Chip icon={item.icon} label={
                                                            <Typography variant="body1" color="black">
                                                                {item.total}
                                                            </Typography>
                                                        } sx={{ p: 2, width: 1 }} color={item.color} />
                                                    </Tooltip>

                                                </Box>

                                            ))
                                        }
                                    </Grid2>

                                </Grid2>

                            </Grid2>

                            <Grid2
                                xs={12}
                                sm={12}
                                md={3}
                                lg={3}
                                xl={3}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",

                                }}
                            >

                                <Avatar src={photo} variant="rounded" sx={{
                                    height: 250,
                                    width: 250,

                                }}>
                                    my photo
                                </Avatar>


                            </Grid2>
                        </Grid2>

                        <Grid2 container>

                            <Grid2 sx={{ width: 1, mt: 2 }}>

                                <Divider sx={{
                                    "&::before, &::after": {
                                        borderColor: "secondary.main",
                                    },
                                }}>
                                    <Chip icon={<EngineeringRounded />} label={
                                        <Typography variant="body1" color="black" textAlign="center">
                                            مهارت های من
                                        </Typography>
                                    } color="secondary" />
                                </Divider>

                                <Skills name={reactSkills.name} icon={reactSkills.icon} color={reactSkills.color} value={reactjs} />
                                <Skills name={javascriptSkills.name} icon={javascriptSkills.icon} color={javascriptSkills.color} value={javascript} />
                                <Skills name={wordpressSkills.name} icon={wordpressSkills.icon} color={wordpressSkills.color} value={wordpress} />
                                <Skills name={htmlSkills.name} icon={htmlSkills.icon} color={htmlSkills.color} value={html} />
                                <Skills name={cssSkills.name} icon={cssSkills.icon} color={cssSkills.color} value={css} />
                                <Skills name={gitSkills.name} icon={gitSkills.icon} color={gitSkills.color} value={git} />



                            </Grid2>

                        </Grid2>


                    </CardContent>
                </Card >

            </div>

        </>
    );
}

export default AboutMe;