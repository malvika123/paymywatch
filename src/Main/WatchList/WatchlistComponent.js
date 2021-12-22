import Watchlist from "./Watchlist";
import { Provider } from "react-redux";
import { store } from "../store";
import { WatchlistAction } from "./Watchlist.action";
import watchListInfo from "./watchlistInfo";
import Payment from "../Payment/Payment";
const WatchlistComponent = ({ onWatchlist }) => {
  const info = watchListInfo();
  return (
    <div>
      <label>
        Hi friend. please help us increase our community by adding your video.
      </label>

      <button
        onClick={() => {
          alert(info);
        }}
      >
        Learn to get Your youtube video id
      </button>

      <Watchlist onSubmit={onWatchlist} />
      {<Payment />}
    </div>
  );
};
export default WatchlistComponent;
