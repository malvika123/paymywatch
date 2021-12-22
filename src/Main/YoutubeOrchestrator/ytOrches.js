import { Link, Route, Routes } from "react-router-dom";
import LocalRoutes from "../Router/Routes";
import Youtube from "../Youtube/Youtube";

const YTOrches = () => {
  return (
    <div>
      hello
      <nav>
        <p>
          <Link to="/youtube/ViewYoutube">Watch Youtube</Link>
        </p>
        <p>
          <Link to="/youtube/watchList">Add My Video to watch list</Link>
        </p>
      </nav>
      <LocalRoutes />
    </div>
  );
};
export default YTOrches;
