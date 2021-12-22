import Login from "../Login/login.connect";
import RegisterBug from "../RegisterBug/RegisterBug.connect";
import Register from "../Register/Register.connect";
import About from "../About/About";
import Youtube from "../YoutubeOrchestrator/ytOrches";
import YoutubeVid from "../Youtube/Youtube";
import { Route, Routes, Link } from "react-router-dom";
import WatchlistComponent from "../WatchList/WatchList.connect";
const LocalRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/registerbug" element={<RegisterBug />} />
      <Route path="/youtube/ViewYoutube" element={<YoutubeVid />} />
      <Route path="/youtube/watchList" element={<WatchlistComponent />} />
      <Route path="/youtube" exact element={<Youtube />} />
    </Routes>
  );
};

export default LocalRoutes;
