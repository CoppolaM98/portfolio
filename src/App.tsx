import { AppHeader } from 'component/layout/AppHeader';
import { CatClothesHangerPage } from 'component/pages/projects/CatClothesHanger';
import { NuvolaPage } from 'component/pages/projects/Nuvola';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from 'component/pages/Homepage';
import { AboutUs } from 'component/pages/AboutUs';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex direction="column" height="100vh" overflow="hidden auto">
      <BrowserRouter basename="portfolio">
      <AppHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/nuvola" element={<NuvolaPage />} />
          <Route path="/catclotheshanger" element={<CatClothesHangerPage />} />
          <Route path="/list" element={<span>pippo</span>} />
          <Route path="/project/:id" element={<span>baudo</span>} />
          <Route path="*" element={<span>404</span>} />
        </Routes>
      </BrowserRouter>
    </Flex>
  );
}

export default App;
