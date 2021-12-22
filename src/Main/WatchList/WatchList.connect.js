import { connect } from "react-redux";
import { WatchlistAction } from "./Watchlist.action";
import WatchlistComponent from "./WatchlistComponent";

const mapDispatchToProps = (dispatch) => ({
  onWatchlist: (params) => dispatch(WatchlistAction(params)),
});

export default connect(null, mapDispatchToProps)(WatchlistComponent);
