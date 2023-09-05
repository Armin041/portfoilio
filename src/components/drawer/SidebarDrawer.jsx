import { Drawer } from "@mui/material";
import DrawerSlidebar from "../drawer";
import { mainContext } from "../../context/mainContext";
import { useContext } from "react";


const SidebarDrawer = () => {

    const { drawerOpen, setDrawerOpen } = useContext(mainContext)
    return (

        <>
            <Drawer
                open={drawerOpen}
                variant='temporary'

                onClose={() => setDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 230
                    },

                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none",
                    },

                }}
            >

                <DrawerSlidebar />

            </Drawer>
        </>
    );
}

export default SidebarDrawer;