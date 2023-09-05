import { Box, Divider } from '@mui/material';


import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SidebarHeader from './Sidebar/SidebarHeader';
import SidebarFooter from './Sidebar/SidebarFooter';
import SidebarTabs from './Sidebar/SidebarTabs';


const DrawerSlidebar = () => {







    return (

        <>

            <SidebarHeader />

            <Grid2 container>
                <Grid2
                    xs={1}
                    sm={1}
                    md={1}
                    lg={1}
                    xl={1}
                ></Grid2>
                <Grid2
                    xs={11}
                    sm={11}
                    md={11}
                    lg={11}
                    xl={11}
                >   <Box>




                    </Box>
                </Grid2>
            </Grid2>



            <SidebarTabs />

            <SidebarFooter />

        </>
    );
}

export default DrawerSlidebar;