import { createContext } from "react";


export const mainContext = createContext({

    pageNumber: 0,
    setPageNumber: () => { },
    handleChangePageNumber: () => { },
    handleDrawerToggle: () => { },
    drawerOpen: false,
    setDrawerOpen: () => { },
    handleThemeChange: () => { }


})