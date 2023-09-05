import { AlternateEmailRounded, ContactPageRounded, FingerprintRounded, HomeRounded, Info } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { useContext } from "react";
import { mainContext } from "../../context/mainContext";


const SidebarTabs = () => {

    const { pageNumber, handleChangePageNumber, handleDrawerToggle } = useContext(mainContext)


    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...a11yProps(0) },
        { label: " درباره من", icon: <FingerprintRounded />, ...a11yProps(1) },
        { label: " رزومه", icon: <ContactPageRounded />, ...a11yProps(2) },
        { label: " راه های ارتباطی", icon: <AlternateEmailRounded />, ...a11yProps(3) },
    ]

    return (
        <>

            <Tabs
                orientation='vertical'
                variant='scrollable'
                scrollButtons
                allowScrollButtonsMobile
                value={pageNumber}
                onChange={handleChangePageNumber}


            >
                {
                    tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            icon={tab.icon}
                            iconPosition='start'
                            sx={{
                                justifyContent: 'flex-start',
                                "&.MuiTab-root": {
                                    minHeight: 50,
                                },
                                color: "text.primary"
                            }}
                            {...a11yProps(0)}
                            onClick={handleDrawerToggle}
                            {...tab}

                        />

                    ))
                }
            </Tabs>
        </>
    );
}

export default SidebarTabs;