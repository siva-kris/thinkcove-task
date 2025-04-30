// App.js

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Frontpage from "./LoginFirstarea/Frontpage";

// Import all carousel card components
import Aframe from "./Components/Carosual Cards/Aframe";
import Amazing from "./Components/Carosual Cards/Amazing";
import Amazingview from "./Components/Carosual Cards/AmazingViwes";
import Arctic from "./Components/Carosual Cards/Arctic";
import Barns from "./Components/Carosual Cards/Barns";
import Beachfront from "./Components/Carosual Cards/Beachfront";
import Bed from "./Components/Carosual Cards/Bed&breakfast";
import Boats from "./Components/Carosual Cards/Boats";
import Cabins from "./Components/Carosual Cards/Cabins";
import Campervans from "./Components/Carosual Cards/Campervans";
import Castle from "./Components/Carosual Cards/Castle";
import Caves from "./Components/Carosual Cards/Caves";
import Chefkitchens from "./Components/Carosual Cards/Chefkitchens";
import Container from "./Components/Carosual Cards/Container";
import Countryside from "./Components/Carosual Cards/Countryside";
import Cycladichomes from "./Components/Carosual Cards/Cycladichomes";
import Design from "./Components/Carosual Cards/Design";
import Domes from "./Components/Carosual Cards/Domes";
import Earthhomes from "./Components/Carosual Cards/Earthhomes";
import Frames from "./Components/Carosual Cards/Frames";
import Golfing from "./Components/Carosual Cards/Golfing";
import Grandpianos from "./Components/Carosual Cards/Grandpianos";
import Hanoks from "./Components/Carosual Cards/Hanoks";
import Historicalhomes from "./Components/Carosual Cards/Historicalhomes";
import Houseboats from "./Components/Carosual Cards/Houseboats";
import Icon from "./Components/Carosual Cards/Icon";
import Island from "./Components/Carosual Cards/Island";
import Lake from "./Components/Carosual Cards/Lake";
import Luxe from "./Components/Carosual Cards/Luxe";
import Mansion from "./Components/Carosual Cards/Mansion";
import Nationalpark from "./Components/Carosual Cards/Nationalpark";
import New from "./Components/Carosual Cards/New";
import Offthegrid from "./Components/Carosual Cards/Offthegrid";
import Omg from "./Components/Carosual Cards/Omg";
import Play from "./Components/Carosual Cards/Play";
import Room from "./Components/Carosual Cards/Room";
import Skiing from "./Components/Carosual Cards/Skiing";
import Skingout from "./Components/Carosual Cards/Skingout";
import Surfing from "./Components/Carosual Cards/Surfing";
import Tinyhouse from "./Components/Carosual Cards/Tinyhouse";
import Topcites from "./Components/Carosual Cards/Topcites";
import Topofworld from "./Components/Carosual Cards/Topofworld";
import Trending from "./Components/Carosual Cards/Trending";
import Tresshouse from "./Components/Carosual Cards/Tresshouse";
import Tropical from "./Components/Carosual Cards/Tropical";
import Vineyards from "./Components/Carosual Cards/Vineyards";
import Windmills from "./Components/Carosual Cards/Windmills";

// Aframe content and price area components
import Af1 from "./Components/Card Componets/Aframecontent";
import Af2 from "./Components/Card Componets/Aframepart-2";
import Af3 from "./Components/Card Componets/Aframepart-3";
import Af4 from "./Components/Card Componets/Aframepart-4";
import Af5 from "./Components/Card Componets/Aframepart-5";
import Af6 from "./Components/Card Componets/Aframepart-6";
import Af7 from "./Components/Card Componets/Aframepart-7";
import Af8 from "./Components/Card Componets/Aframepart-8";

import R from "./Components/Pricearea/Afprice";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin() {
    setIsAuthenticated(true);
  }

  return (
    <BrowserRouter>
      {/* {!isAuthenticated ? (
        <Frontpage onLogin={handleLogin} />
      ) : ( */}
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/Aframe" element={<Aframe />} />
          <Route path="/Amazing" element={<Amazing />} />
          <Route path="/AmazingViewes" element={<Amazingview />} />
          <Route path="/Arctic" element={<Arctic />} />
          <Route path="/Barns" element={<Barns />} />
          <Route path="/Beachfront" element={<Beachfront />} />
          <Route path="/Bed&bearkfast" element={<Bed />} />
          <Route path="/Boats" element={<Boats />} />
          <Route path="/Cabins" element={<Cabins />} />
          <Route path="/Campervans" element={<Campervans />} />
          <Route path="/Castle" element={<Castle />} />
          <Route path="/Caves" element={<Caves />} />
          <Route path="/Chefkitchens" element={<Chefkitchens />} />
          <Route path="/Container" element={<Container />} />
          <Route path="/Countryside" element={<Countryside />} />
          <Route path="/Cycladichomes" element={<Cycladichomes />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/Domes" element={<Domes />} />
          <Route path="/Earthhomes" element={<Earthhomes />} />
          <Route path="/Frames" element={<Frames />} />
          <Route path="/Golfing" element={<Golfing />} />
          <Route path="/Grandpianos" element={<Grandpianos />} />
          <Route path="/Hanoks" element={<Hanoks />} />
          <Route path="/Historicalhomes" element={<Historicalhomes />} />
          <Route path="/Houseboats" element={<Houseboats />} />
          <Route path="/Icon" element={<Icon />} />
          <Route path="/Island" element={<Island />} />
          <Route path="/Lake" element={<Lake />} />
          <Route path="/Luxe" element={<Luxe />} />
          <Route path="/Mansion" element={<Mansion />} />
          <Route path="/Nationalpark" element={<Nationalpark />} />
          <Route path="/New" element={<New />} />
          <Route path="/Offthegrid" element={<Offthegrid />} />
          <Route path="/Omg" element={<Omg />} />
          <Route path="/Play" element={<Play />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/Skiing" element={<Skiing />} />
          <Route path="/Skingout" element={<Skingout />} />
          <Route path="/Surfing" element={<Surfing />} />
          <Route path="/Tinyhouse" element={<Tinyhouse />} />
          <Route path="/Topcites" element={<Topcites />} />
          <Route path="/Topofworld" element={<Topofworld />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Tresshouse" element={<Tresshouse />} />
          <Route path="/Tropical" element={<Tropical />} />
          <Route path="/Vineyards" element={<Vineyards />} />
          <Route path="/Windmills" element={<Windmills />} />
          {/* card routes */}
          <Route path="/Aframecontent" element={<Af1 />} />
          <Route path="/Aframepart-2" element={<Af2 />} />
          <Route path="/Aframepart-3" element={<Af3 />} />
          <Route path="/Aframepart-4" element={<Af4 />} />
          <Route path="/Aframepart-5" element={<Af5 />} />
          <Route path="/Aframepart-6" element={<Af6 />} />
          <Route path="/Aframepart-7" element={<Af7 />} />
          <Route path="/Aframepart-8" element={<Af8 />} />
          <Route path="/Afprice" element={<R />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
