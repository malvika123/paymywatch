import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

// class YoutubeFrame extends React.Component {
//   render() {
//     const url = `https://www.youtube.com/embed/${data}?controls=0&rel=0`;
//     return (
//       <div>
//         <iframe
//           width="1200"
//           height="615"
//           src={url}
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//       </div>
//     );
//   }
// }

function YoutubeFrame({
  vidCountFxn,
  data,
  getVideoTiming,
  isVidSkipped,
  skipVid,
}) {
  const [ytVid, setYtVid] = useState({
    //muteState: 0,
    VideoPlayed: 0,
    videoPause: 0,
    timeNow: 0,
  });
  const [seconds, setSeconds] = React.useState(30);

  // const muteVid = () => {
  //   setYtVid((prevState) => {
  //     const newState = prevState.muteState === 0 ? 1 : 0;
  //     console.log(newState);
  //     return {
  //       ...prevState,
  //       muteState: newState,
  //     };
  //   });
  // };
  const setTime = () => {
    if (seconds > 0) {
      if (ytVid.videoPause !== 1) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      }
    } else {
      setSeconds(0);
    }
  };
  const onVidPause = (event) => {
    setYtVid((prevState) => {
      return {
        ...prevState,
        videoPause: 1,
        timeNow: seconds,
      };
    });
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0,
      disablekb: 1,
      controls: 0,
    },
  };

  const vidOnReady = (event) => {
    // access to player in all event handlers via event.target
    console.log(event.target.setVolume(2));
    getVideoTiming(event.target.getDuration());
  };

  const onVidEnd = () => {
    vidCountFxn(false);
    setSeconds(31);
    setYtVid((prevState) => {
      return {
        ...prevState,
        VideoPlayed: 0,
      };
    });
  };

  const onVidPlay = (event) => {
    setYtVid((prevState) => {
      return {
        ...prevState,
        videoPause: 0,
      };
    });
    if (isVidSkipped === 1) {
      setSeconds(30);
    }
    skipVid(0);
    setYtVid((prevState) => {
      return {
        ...prevState,
        VideoPlayed: 1,
      };
    });
  };

  //let muteState = ytVid.muteState === 0 ? "Mute" : "Unmute";
  return (
    <div>
      <h2>
        Note: volume of this video is intentionally low. Please reach out to us
        if that is an issue to you.
      </h2>
      <YouTube
        videoId={data}
        opts={opts}
        onReady={vidOnReady}
        onEnd={onVidEnd}
        onPlay={onVidPlay}
        onPause={onVidPause}
      />
      {ytVid.VideoPlayed === 1 && seconds !== 0 && ytVid.videoPause === 0
        ? setTime()
        : null}
      {seconds === 0 && isVidSkipped === 0 ? (
        <p>*Alert* you can skip this vid</p>
      ) : (
        <p>
          Minimum Watch time :{" "}
          {seconds === 0
            ? 30
            : ytVid.videoPause === 1
            ? ytVid.timeNow
            : seconds}
        </p>
      )}
      {/* <button disabled={ytVid.VideoPlayed} onClick={() => muteVid()}>
        {muteState}
      </button> */}
    </div>
  );
}
export default YoutubeFrame;
