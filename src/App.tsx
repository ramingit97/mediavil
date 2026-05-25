import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/Home1";
import { ROUTER } from "@/constants/router";
import EuropeRadio from "@/pages/EuropeRadio";
import NovoeRadio from "@/pages/NovoeRadio";
import RadioMir from "@/pages/RadioMir";
import RetroFm from "@/pages/RetroFm";
import RoadRadio from "@/pages/RoadRadio";
import RusskoeRadio from "@/pages/RusskoeRadio";
import Studio from "@/pages/Studio";
import Stations from "@/pages/Stations";
import Services from "@/pages/ServicesPage";
import Contacts from "@/pages/Contacts";
import About from "@/pages/About";
import Home2 from "@/pages/home2";
import Details from "@/pages/DetailsPage";
import ErrorPage from "@/pages/404Page";
import Home3 from "@/pages/home3";

function App() {
  return (
    <Routes>
      <Route path={ROUTER.Home} element={<HomePage />} />
      <Route path={ROUTER.Home2} element={<Home2 />} />
      <Route path={ROUTER.Home3} element={<Home3 />} />
      <Route path={ROUTER.Europe} element={<EuropeRadio />} />
      <Route path={ROUTER.NovoeRadio} element={<NovoeRadio />} />
      <Route path={ROUTER.RadioMir} element={<RadioMir />} />
      <Route path={ROUTER.Retro} element={<RetroFm />} />
      <Route path={ROUTER.RoadRadio} element={<RoadRadio />} />
      <Route path={ROUTER.RuskoeRadio} element={<RusskoeRadio />} />
      <Route path={ROUTER.Studio} element={<Studio />} />
      <Route path={ROUTER.About} element={<About />} />
      <Route path={ROUTER.Stations} element={<Stations />} />
      <Route path={ROUTER.Services} element={<Services />} />
      <Route path={ROUTER.Contacts} element={<Contacts />} />
      <Route path={ROUTER.Details} element={<Details />} />
      <Route path={ROUTER.NotFound} element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
