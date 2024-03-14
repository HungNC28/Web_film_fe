import React from "react";
import YouTube from "react-youtube";

const Video = ({ videoId }) => {
  const onPlayerReady = (event) => {
    // truy cập trình phát trong tất cả các trình xử lý sự kiện thông qua event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default Video;
