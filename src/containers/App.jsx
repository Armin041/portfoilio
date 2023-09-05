import { useEffect, useState } from 'react';
// import '../App.css';
import MainLayout from '../layouts/MainLayout';
import Sidebar from '../components/Sidebar/Sidebar';
import Page from '../components/pages/Page';
import { Box, Typography, useMediaQuery } from '@mui/material';
import SidebarContainer from './SidebarContainer';
import { useTheme } from '@mui/material';
import { mainContext } from '../context/mainContext'
import PagesContainer from './PagesContainer';
import DrawerFab from '../components/drawer/DrawerFab';
import HomePage from '../components/pages/Home/HomePage';
import AboutMe from '../components/pages/About/AboutMe';
import Resume from '../components/pages/Resume/Resume';
import ContactForm from '../components/pages/Contact Form/ContactForm';
import ThemeFab from '../layouts/themes/ThemeButton';



function App() {



  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mood, setMood] = useState()

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


  useEffect(() => {
    setMood(prefersDarkMode ? "dark" : "light")
  }, [])

  const handleThemeChange = () => {

    setMood((prevmood) => (prevmood === "light" ? "dark" : "light"))
    console.log("theme is: ", mood)
  }

  const handleChangePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  const handleDrawerToggle = () => {

    setDrawerOpen(!drawerOpen)
  }

  return (
    <>

      <mainContext.Provider value={{
        pageNumber, drawerOpen,
        handleChangePageNumber, setDrawerOpen,
        setPageNumber, handleDrawerToggle, handleThemeChange
      }}>


        <MainLayout mood={mood}>



          <SidebarContainer>
            <Sidebar />

          </SidebarContainer>

          <DrawerFab />


          <PagesContainer>
            <ThemeFab />
            <Page value={pageNumber} index={0}>
              <HomePage />
            </Page>

            <Page value={pageNumber} index={1}>
              <AboutMe />
            </Page>

            <Page value={pageNumber} index={2}>
              <Resume />
            </Page>


            <Page value={pageNumber} index={3}>
              <ContactForm />
            </Page>

          </PagesContainer>

        </MainLayout>
      </mainContext.Provider>

    </>
  );
}

export default App;
