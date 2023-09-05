import { EngineeringRounded, HomeRepairServiceRounded, SchoolRounded, Terminal, TerminalRounded } from "@mui/icons-material";
import { Card, Chip, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Helmet } from "react-helmet-async";
import TimeLine from "./TimeLine";
import TimeLineEducation from "./TimeLine";
import TimeLineExp from "./TimeLineExp";


const Resume = () => {
    return (

        <>

            <Helmet>
                <title> پورتفولیو |  رزومه</title>
            </Helmet>

            <Card sx={{
                backgroundColor: "primary", height: "100vh", overflow: "auto", "&.MuiCard-root::-webkit-scrollbar": {
                    display: "none"
                }
            }} >

                <Divider sx={{
                    "&::before, &::after": {
                        borderColor: "error.main",
                    },
                    mt: 3
                }}>
                    <Chip icon={<TerminalRounded />} label={
                        <Typography variant="h6" color="black" textAlign="center"

                        >
                            رزومه من
                        </Typography>
                    } color="error"
                        sx={{ p: 3 }}
                    />


                </Divider>

                <Grid2 container>

                    <Grid2
                        xs={6}
                    >
                        <Divider sx={{
                            "&::before, &::after": {
                                borderColor: "info.main",
                            },
                            mt: 3, mx: 2
                        }}>
                            <Chip icon={<SchoolRounded />} label={
                                <Typography variant="h6" color="black" textAlign="center"

                                >
                                    تحصیلات
                                </Typography>
                            } color="info"
                                sx={{ p: 3 }}
                            />
                        </Divider>

                        <TimeLineEducation />
                    </Grid2>





                    <Grid2
                        xs={6}
                    >
                        <Divider sx={{
                            "&::before, &::after": {
                                borderColor: "warning.main",
                            },
                            mt: 3, mx: 2
                        }}>
                            <Chip icon={<HomeRepairServiceRounded />} label={
                                <Typography variant="h6" color="black" textAlign="center"

                                >
                                    تجربیات
                                </Typography>
                            } color="warning"
                                sx={{ p: 3 }}
                            />
                        </Divider>

                        <TimeLineExp />
                    </Grid2>

                </Grid2>


            </Card>

        </>

    );
}

export default Resume;