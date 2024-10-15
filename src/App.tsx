import { Flex } from '@chakra-ui/react';
import { AppHeader } from 'component/layout/AppHeader';
import { Screen404 } from 'component/pages/404';
import { AboutUs } from 'component/pages/AboutUs';
import { Homepage } from 'component/pages/Homepage';
import { ProjectsList } from 'component/pages/ProjectsList';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { loadLanguagePreference } from 'utils/LanguageHandler';
import LoadingContainer from 'utils/loading/LoadingContainer';
import NotificationContainer from 'utils/notification/NotificationContainer';
import { ProjectPageRenderer } from 'utils/projectRenderers/ProjectPageRenderer';

function App() {

  useEffect(() => { loadLanguagePreference(); }, []) //TODO check on bundled build if it gets called twice

  return (
    <Flex direction="column" height="100vh" overflow="hidden auto">
      <LoadingContainer />
      <NotificationContainer />
      <BrowserRouter basename="portfolio">
        <AppHeader />
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<ProjectsList />} />
          <Route path="/project/:id" element={<ProjectPageRenderer />} />
          <Route path="*" element={<Screen404 />} />
        </Routes>
      </BrowserRouter>
    </Flex>
  );
}

export default App;
