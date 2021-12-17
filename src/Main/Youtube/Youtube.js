import { Component, useState } from "react";
import { convertToRupees, secondsToHms } from "./util";
import { DollarSign, IndianRuppesSign } from "./youtube.constants";
import { YoutubeList } from "./YoutubeList";
import YoutubeStructure from "./YoutubeStructure";
const Youtube = () => {
  const [youtubeStats, setYoutubeStats] = useState({
    videoCount: 0,
    videoWatched: 0,
    vidSkiped: 0,
    indianCurrency: 0,
    vidTiming: 0,
  });
  const skipTheVideo = (num) => {
    setYoutubeStats((prevState) => {
      return {
        ...prevState,
        vidSkiped: num,
      };
    });

    if (num === 1) {
      incVideoCount("true");
      <YoutubeStructure
        data={YoutubeList[countOfVid]}
        videoCountFunction={incVideoCount}
        getVideoTiming={getVideoTiming}
        isVidSkipped={youtubeStats.vidSkiped}
        skipVid={skipTheVideo}
      />;
    }
  };
  const getVideoTiming = (time) => {
    setYoutubeStats(() => {
      return {
        ...youtubeStats,
        vidTiming: time,
      };
    });
  };
  const incVideoCount = (videoSkiped) => {
    if (videoSkiped === "true") {
      setYoutubeStats((prevState) => {
        return {
          ...prevState,
          videoCount: prevState.videoCount + 1,
        };
      });
    } else {
      setYoutubeStats((prevState) => {
        return {
          ...prevState,
          videoCount: prevState.videoCount + 1,
          videoWatched: prevState.videoWatched + 1,
        };
      });
    }
  };
  const getIndianCurrency = async (dollarCount) => {
    const indianRupees = await convertToRupees(dollarCount);
    setYoutubeStats(() => {
      return {
        ...youtubeStats,
        indianCurrency: indianRupees,
      };
    });
  };
  const countOfVid = youtubeStats.videoCount;
  return (
    <div>
      <h1>YOUTUBE</h1>
      <p>
        Please watch the following videos. These videos will autoplay. you can
        only play and pause them. Enjoy and earn.
      </p>
      {countOfVid < YoutubeList.length ? (
        countOfVid === 0 ? (
          <YoutubeStructure
            data={YoutubeList[countOfVid]}
            videoCountFunction={incVideoCount}
            getVideoTiming={getVideoTiming}
            isVidSkipped={youtubeStats.vidSkiped}
            skipVid={skipTheVideo}
          />
        ) : (
          <YoutubeStructure
            data={YoutubeList[countOfVid]}
            videoCountFunction={incVideoCount}
            getVideoTiming={getVideoTiming}
            isVidSkipped={youtubeStats.vidSkiped}
            skipVid={skipTheVideo}
          />
        )
      ) : (
        <p>We will get you more videos in some time.</p>
      )}

      {countOfVid < YoutubeList.length ? (
        <div>
          <h4>Timing of this video: {secondsToHms(youtubeStats.vidTiming)}</h4>
          <button onClick={() => skipTheVideo(1)}>Skip this video</button>
        </div>
      ) : null}
      <h3>You have watched : {youtubeStats.videoWatched} videos </h3>
      {/*<h3>You have skipped : {youtubeStats.vidSkiped} videos </h3>*/}
      <h2>
        You have earned : {youtubeStats.videoWatched} {DollarSign}
      </h2>
      <p>convert to indian currency</p>
      <button onClick={() => getIndianCurrency(youtubeStats.videoWatched)}>
        convert
      </button>
      <p>
        {IndianRuppesSign} {youtubeStats.indianCurrency}
      </p>
    </div>
  );
};
export default Youtube;
