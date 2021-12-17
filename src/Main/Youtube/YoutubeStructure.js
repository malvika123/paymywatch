import YoutubeFrame from "./YoutubeFrame";

const YoutubeStructure = ({
  videoCountFunction,
  data,
  getVideoTiming,
  isVidSkipped,
  skipVid,
}) => {
  return (
    <YoutubeFrame
      data={data}
      vidCountFxn={videoCountFunction}
      getVideoTiming={getVideoTiming}
      isVidSkipped={isVidSkipped}
      skipVid={skipVid}
    />
  );
};
export default YoutubeStructure;
